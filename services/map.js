const { Map } = require("../model");
const { model } = require("mongoose");

const createPoints = async (userId, req, res, next) => {
  try {
    const loggedInUser = userId._id
    const doc = {};
    doc.name = req.body.name;
    doc.userId = loggedInUser;
    doc.location.type = "point";
    doc.location.coordinates = [req.body.longitude, req.body.latitude]
    const map = new Map(doc)
    await map.save()
    res.status(201).json({ payload: { success: true, data: map } })
  } catch (error) {
    next(error)
  }
}

//this will get all the locations saved by the user
const getCoodinate = async (userId, req, res, next) => {
  try {
    const loggedInUser = userId._id
    const location = await Map.find({ userId: loggedInUser })
    res.status(200).json({ payload: { success: true, data: map } })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createPoints,
  getCoodinate
}