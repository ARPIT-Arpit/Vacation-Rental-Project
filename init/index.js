const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listing");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";


main()
.then( res => {console.log("Connected to DB");} )
.catch( err => {console.log(err);} )


async function main()
{

    await mongoose.connect(MONGO_URL);

}


const initDB = async () => {

    await Listing.deleteMany({});
    initData.data = initData.data.map( obj => ( { ...obj, owner: '66ad404b2069ec3268908493' } ) );
    await Listing.insertMany(initData.data);
    console.log("Data was initialised!");

};


initDB();