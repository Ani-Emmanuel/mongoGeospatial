# mongoGeospatial
# Set Up
1. download the project and run npm install,
2. create a file in the root folder and name it ##.env in there create your  # DB_URL,# PORT, # SECRET and specify your database url, port the application will run on and ay secret word for jwt
3. start the app with npm start

# End Points 
1. User registration : localhost:(your port)/registration
2. user login:  localhost:(your port)/login
3. save Coordinate:  localhost:(your port)/create
4. get all the point saved by the login user: localhost:(your port)

# NOTE 
You need to be logged in and have a token attached in the header before you can perform the last two operations
