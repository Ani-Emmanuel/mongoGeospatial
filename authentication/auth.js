const { User } = require('../model');
const {
  genToken,
  decryptPassword,
  encryptPassword
} = require("../utils/helper");


module.exports = {
  localRegistration: async (req, res, next) => {
    try {
      const { body } = req;
      const { email } = req.body;

      // Checks if user already exist in the database
      const user = await User.findOne({ email });
      if (user) {
        return res.status(401).json({
          data: {
            success: false,
            message: "User already exist, please login or use forget password",
          },
        });
      }

      // Perform the hashing of the password and saving the new user
      const newuser = new User(body);
      const { password } = newuser;
      const hashedPassword = await encryptPassword(password);
      newuser.password = hashedPassword;
      const data = await newuser.save();

      //Generate token to log user in
      const token = await genToken(data._id);
      res.status(201).json({
        success: true,
        data: { fullName: data.fullName, token },
      });
    } catch (error) {
      next(error);
    }
  },

  //middleware for login
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (user) {
        const pass = await decryptPassword(password, user.password);
        if (!pass) {
          return res.status(422).json({
            data: {
              success: false,
              message: "Invalid username or password",
            },
          });
        }

        const token = await genToken(user._id);
        return res.status(200).json({
          token,
          success: true,
          fullName: user.fullName,
        });
      } else {
        return res.status(404).json({
          data: {
            success: false,
            message: "User does not exist",
          },
        });
      }
    } catch (error) {
      next(error);
    }
  },


};
