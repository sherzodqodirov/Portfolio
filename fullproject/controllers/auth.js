import User from "../models/User.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const registration = async (req, res) => {
    try {
        const {email, password} = req.body
        const isUsed = await User.findOne({email})

        if (isUsed) {
            return res.status(300).json({message: "Данный Email уже занят"})
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const user = new User({
            email,
            password: hash
        })

        await user.save()

        const token = jwt.sign({
            email: user.email
        },
        process.env.JWT_SECRET,
        {expiresIn: '30d'})

        res.status(201).json({
            token:token,
            message: "Пользовател создан"})

    } catch (e) {
        res.json({message: "Ошибка при создании пользователя"})
    }
}
export const login = async (req, res) => {
    try {
        const {email, password} = req.body
        const user = await User.findOne({email})

        if (!user) {
            return res.status(401).json({message: "Данный Email не существует"})
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.json({
                message: "Неверный логин или пароль"
            })
        }
        const token = jwt.sign({
                email: user.email
            },
            process.env.JWT_SECRET,
            {expiresIn: '30d'})

        res.status(201).json({
            token,
            email,
            message: "Вы вошли в систему"
        })

    } catch (e) {
        res.json({message: "Ошибка при создании пользователя"})
    }
}
export const getme = async (req, res) => {
    try {

    } catch (e) {
        console.log(e)
    }
}
