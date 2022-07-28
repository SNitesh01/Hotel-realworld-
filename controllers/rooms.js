const { Request, Response } = require('express');
const roomsModel = require("../models/rooms.model");

class Rooms {
  /**
   * 
   * @param {Request} req 
   * @param {Response} res 
   */
  static all(req, res) {
    roomsModel.find({}, (err, rooms) => {
      if (err) return res.send(null)
      else return res.send(rooms);
    });
  }

  static get(req, res) {
    roomsModel.findById(req.body._id, (err, room) => {
      if (err || !room) return res.send(null)
      else return res.send(room);
    })
  }
}

module.exports = Rooms;