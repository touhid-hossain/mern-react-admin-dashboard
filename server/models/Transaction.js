import mongoose from "mongoose";
const { Schema, model } = mongoose;

const TransactionSchema = new Schema(
  {
    userId: String,
    cost: String,
    products: {
        type:[mongoose.Types.ObjectId],
        of: Number,
    },
  },
  { timestamps: true }
);

const Transaction = model("Transaction", TransactionSchema);
export default Transaction;

