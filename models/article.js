const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const articleSchema=new Schema({
    topic:{
        type:String,
        require:true
    },
    yearWritten:{
        type:Number,
        require:true
    }
});

const Article=mongoose.model("Article",articleSchema);
module.exports=Article;