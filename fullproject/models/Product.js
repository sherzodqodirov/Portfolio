import mongoose from "mongoose";
import { Schema } from "mongoose";
const Productschema = Schema(
  {
    productname: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
)
export default mongoose.model("Product", Productschema);
