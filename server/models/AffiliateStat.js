import mongoose from "mongoose";
const { Schema, model } = mongoose;

const AffiliateStateSchema = new Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
    affiliateSales: {
      type: [mongoose.Types.ObjectId],
      ref: "Transaction",
    },
  },
  { timestamps: true }
);

const AffiliateStat = model("AffiliateStat", AffiliateStateSchema);
export default AffiliateStat;

