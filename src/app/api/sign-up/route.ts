import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";
import { log } from "console";
import { success } from "zod";

export async function POST(request: Request){
    await dbConnect()

    try {
  const {username, email, password} = await request.json()
    } catch (error) {
     console.log("Error Registring user", error) 
     return Response.json(
        {
            success: false,
            message: "Error Registring user"
        },
        {
            status: 500
        }
     )   
    }
}