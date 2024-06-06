import mongoose from "mongoose";

// Replace the uri string with your connection string.
const uri =
    "mongodb+srv://c0548503101:B8IP1wUFFnDvdfPL@tiny-url.buvtljr.mongodb.net/";
const uriLocal = "mongodb://localhost:27017/tiny-url";

const connectDB = async () => {
    await mongoose.connect(uriLocal);
};
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
})

database.once('connected', () => {
    console.log('Database Connected');
})

mongoose.set('toJSON', {
    virtuals: true,
    transform: (doc, converted) => {
        delete converted._id;
    }
});

export default connectDB;
