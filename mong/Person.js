let mongoose=require('mongoose')
let personSchema= new mongoose.Schema({
    name:{
        required:true,
        type: String
    },
    age :  Number,

    favoriteFoods:{
        type:Array,
        default:["pizza"]
    }
})
module.exports=mongoose.model('Person',personSchema)