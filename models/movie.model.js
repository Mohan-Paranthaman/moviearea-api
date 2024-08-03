import { Schema, model } from "mongoose";


//write the schema
const schema = new Schema({
    title:{
        type:String,
        requireed:true,
        unique:true
    },
    desc: {
        type:String,
        requireed:true,
    },
    
});

//create your model
const Movie = model("Movie",schema);

export default Movie;