import mongoose from "mongoose"

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  genre: {
    type: String
  },
  releaseYear: {
    type: Number
  },
  rating: {
    type: Number,
    min: 0,
    max: 10
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
}, { timestamps: true })

export default mongoose.model("Movie", movieSchema)
