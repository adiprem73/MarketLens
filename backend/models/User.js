const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
  selected: Boolean,
  shares: Number,
});

const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  mobile: String,
  stocks: {
    TCS: stockSchema,
    RELIANCE: stockSchema,
    INFY: stockSchema,
    HDFCBANK: stockSchema,
    HINDUNILVR: stockSchema,
    ITC: stockSchema,
    SBIN: stockSchema,
    BHARTIARTL: stockSchema,
    WIPRO: stockSchema,
  },
});

module.exports = mongoose.model("User", userSchema);
