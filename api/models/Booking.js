import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    place : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'Place'
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User',
    },
    checkIn : {
        type : String,
        required : true,
    },
    checkOut : {
        type : String,
        required : true,
    },
    name : {
        type : String,
        required : true,
    },
    phone : {
        type : String,
        required : true,
    },
    price : {
        type : Number,
        required : true,
    },
    numberOfGuests : {
        type : Number,
        required : true,
    }
})

export const Booking = mongoose.model('Booking',bookingSchema);