import mongoose from 'mongoose'

const clientSchema = new mongoose.Schema(
  {
    name: {
      type: "String",
      required: true,
    },
    email: {
      type: "String",
      required: true,
    },
    phone: {
      type: "Number",
      required: true,
    },
    address: {
      type: "Mixed",
      required: true,
    },
    message: {
      type: "Mixed",
    }
  },
  {
    timestamps: true,
  }
);

const clientModel = mongoose.model("clients", clientSchema);
export default clientModel;