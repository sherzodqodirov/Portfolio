import mongoose from 'mongoose';

const schema = new mongoose.Schema({
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        todos: [
            {
                type:mongoose.Schema.Types.ObjectId,
                ref: 'Todo'
            }
        ],
    },
    {timestamps: true}
)
export default mongoose.model('User', schema)