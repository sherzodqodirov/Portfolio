import { Schema, model } from "mongoose";

const PlaneSchema = Schema(
  {
    name: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    capasity: {
      type: Number,
      require: true,
    },

    desc: {
      type: String,
      require: true,
    },
    planeImg: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export default model("Plane", PlaneSchema);
