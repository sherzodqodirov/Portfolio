import ChatModel from "../models/ChatModel.js";

export const createChat = async (req, res, next) => {
    const newChat = new ChatModel({
        members: [req.body.senderId, req.body.receiverId]
    })

    try {
        const result = await newChat.save();
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json(err); 
    }
}