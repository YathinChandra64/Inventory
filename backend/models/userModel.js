const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
  name:{
    type:String,
    required:[true,"Please add a name"]
  },
  email:{
    type:String,
    required:[true,"Please add an email"],
    unique:true,
    trim:true,
    match:[
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please enter a valid email"
    ]
  },
  password:{
    type:String,
    required:[true,"Please add a password"],
    minLength:[6,"Password must be up to 6 characters"],
    maxLength:[30,"Password must not be more than 30 characters"]
  },
  photo:{
    type:String,
    required:[true,"Please add a photo"],
    default:"https://th.bing.com/th?id=OIP.9BVL-wy_acR02ymiRXskpQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
  },
  phone:{
    type:String,
    default:"+91"
  },
  bio:{
    type:String,
    maxLength:[250,"Bio must not be more than 250 characters"],
    default:"bio"
  }
},{
  timestamps:true
})

const User=mongoose.model("User",userSchema)
module.exports=User