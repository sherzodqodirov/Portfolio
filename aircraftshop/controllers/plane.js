import Plane from "../models/planes.js";

export const getplanes = async (req, res) => {
  try {
    const planes = await Plane.find().sort({ createdAt: -1 });
    res.status(200).json(planes);
  } catch (error) {
    res.status(500).json({ message: "Error 500" });
  }
};

export const getsinglplane = async (req, res) => {
  try {
    const { id } = req.params;
    const singleplane = await Plane.findOne({ _id: id });

    if (!singleplane) {
      return res.status(400).json({ message: "no airplane" });
    } else {
      res.status(200).json(singleplane);
    }
  } catch (error) {
    res.status(500).json({ message: "Error 500" });
  }
};


export const createPlane = async (req, res) => {
  const error = {};

  if (!req.body.name) {
    error.name = { message: "Error name" };
  }
  if (!req.body.desc) {
    error.desc = { message: "Error desc" };
  }
  if (!req.body.price) {
    error.price = { message: "Error price" };
  }
  if (!req.body.capasity) {
    error.capasity = { message: "Error capasity" };
  }
  if (req.body.capasity && req.body.capasity.length > 2) {
    error.capasity = { message: "Error capasity>2" };
  }
  if (req.body.desc && req.body.desc.length > 700) {
    error.desc = { message: "Error desc>700" };
  }
  if (!req.file) {
    error.planeImg = { message: "Error img" };
  }
  if (Object.keys(error).length > 0) {
    return res.status(400).json(error);
  }

  try {
    const { name, price, desc, capasity } = req.body;
    const plane = await Plane.create({
      name,
      price,
      desc,
      capasity,
      planeImg: `http://localhost:${process.env.PORT}/static/${req.file.filename}`,
    });
    res.status(201).json(plane);
  } catch (error) {
    res.status(500).json({ message: "Error 500" });
  }
};
