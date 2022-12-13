const Mongoose = require("mongoose");

const PageSchema = new Mongoose.Schema({
    filename: {
      type: String,
      
    },
    fields: {
      type: [],
      //minlength: 6,
      required: true,
    },
    
  });

  const Page = Mongoose.model("pages",PageSchema);

  
  module.exports = Page;