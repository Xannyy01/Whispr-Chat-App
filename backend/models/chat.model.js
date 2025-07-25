import mongoose from 'mongoose'
const msgSchema = mongoose.Schema({
   text: {
       type: String,
       required: true
   },
   sender: {
       type: String,
       required: true
   },
   // not necessary to have receiver
   receiver: {
       type: String,
       required: true
  },
  
   // createdAt: {
   //     type: Date,
   //     default: Date.now
   // }
});



const conversationSchema = mongoose.Schema({
      users : [{
       type: String,
       required: true
   }], 
   msgs:[msgSchema],
   
});

const Conversation = mongoose.model('conversation',conversationSchema)
export default Conversation
