import UserModel from "../models/UserModel.js";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
    try {
        const {firstName, lastName, email, password} = req.body

        const isUsed = await UserModel.findOne({email})

        if (isUsed) {
            return res.status(300).send({message: "User already registered"})
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const user = await UserModel.create({
            firstname: firstName,
            lastname: lastName,
            email,
            password: hash
        })

        const token = jwt.sign({
                user
            },
            process.env.JWT_SECRET,
            {expiresIn: "30d"}
        )

        return res.status(201).json({
            token,
            message: "User registered"
        });



    } catch (e) {
        res.status(500).send({message: "Error registering"})
    }

}

export const loginUser = async (req, res) => {

}