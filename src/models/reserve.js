import { Schema, model } from 'mongoose'
// import house from './house'

const ReserveSchema = new Schema({
    date: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    house: {
        type: Schema.Types.ObjectId,
        red: 'House'
    }
})

export default model('Reserve', ReserveSchema)