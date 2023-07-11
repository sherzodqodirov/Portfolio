import mongoose from "mongoose";

const ChatSchema = mongoose.Schema(
    {
        members: {
            type: Array,
        }
    },
    {
        timestamp: true,
    }
)

const ChatModel=mongoose.model("chat",ChatSchema);
export default ChatModel;
