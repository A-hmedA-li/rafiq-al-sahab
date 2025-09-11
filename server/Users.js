"use server"

import prisma from "@/lib/prisma"
import bcrypt from "bcryptjs"
export async function signUp(data){
    data.role = 'user';

    
    try{
        const {password} = data ; 
        if (!data.name || !data.email || !password)
            throw new Error('no name or email or password was supplied')
        const existingUser = await prisma.user.findUnique({
            where: { email: data.email }
        })
        if (existingUser)
            throw new Error("User already exisit");


        if (password.length < 8)
            throw new Error('passowrd too short, should be at least 8 chars')
        if (!data.agreeToTerms)
            throw new Error('you should agree to terms and servieces');
        const hashedPassword = await bcrypt.hash(password, 12)
       

        const newUser = await prisma.user.create({
            data:{
                name:   data.name,
                email:  data.email, 
                phone:  data.phone, 
                emailVerified: new Date(), 
                role: 'user', 
                password: hashedPassword, 
                image: '/images/lgc.png'
            }
        }); 


 
        return {success: true , data:newUser}
    }
    catch(e){
      
        return {success:false , e:e.message}
    }
}

export async function getUserById(id){

    try{

        const user = await prisma.user.findUnique({
            where:{id:id}
        })

        return {success: true , data:user}
    }catch(e){

         return {success:false , e:e.message} 
    }
}