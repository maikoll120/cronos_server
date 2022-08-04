const mongoose = require('mongoose')

const Schema = mongoose.Schema

const messageSchema = new Schema(
  {
    title: { type: String, required: true, maxLength: 40 },
    content: { type: String, required: true, maxLength: 120 },
    category: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Category'
      }
    ]
  },
  { versionKey: false, timestamps: true }
)

module.exports = mongoose.model('Message', messageSchema)
