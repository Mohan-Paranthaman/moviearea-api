import { Schema, model } from "mongoose";


//write the schema
const schema = new Schema({
    title:String,
    desc: String,
    boxoffice:String,
    createdAt: {
        type: Date,
        default: Date.now
      },
});

//create your model
const Movie = model("Movie",schema);

export default Movie;