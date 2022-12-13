const Mongoose = require("mongoose");

const FieldSchema = new Mongoose.Schema({
    
    fields: {
      type: [],
      //minlength: 6,
      required: true,
    },
    
  });

  const Fields = Mongoose.model("fields",FieldSchema);

  
  module.exports = Fields;