import { Document, Schema, model } from "mongoose"


interface iUser{
    name: string
    email: string
    password: string
    avatar: string
    verify: boolean
    token: string
};

interface iUserData extends iUser, Document{};

const userModel = new Schema<iUserData>(
    {
        name:{
            type: String
        },
        email:{
            type: String,
            unique: true
        },
        password:{
            type: String
        },
        token:{
            type: String
        },
        avatar:{
            type: String
        },
        verify:{
            type: Boolean
        }
    },
    {timestamps: true}
);

export default model<iUserData>("users",userModel);