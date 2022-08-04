const mongoose = require('mongoose')

const Schema = mongoose.Schema

const scheduleSchema = new Schema(
  {
    title: { type: String, required: true, maxLength: 40 },
    date: { type: Date, required: true },
    message: {
      type: Schema.Types.ObjectId,
      ref: 'Message'
    },
    contact: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Contact'
      }
    ]
  },
  { versionKey: false, timestamps: true }
)

module.exports = mongoose.model('Schedule', scheduleSchema)
