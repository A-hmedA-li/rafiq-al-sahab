
"use server"

import prisma from "@/lib/prisma"

export async function getMessages() {
    try {
        const messages = await prisma.contactUS.findMany({
            orderBy: {
                createdAt: 'desc',
            }
        }) ; 
        return {success: true , data: messages}; 
    } 
    catch(e){

        return {success: false , e:e.message}
    }
}
export async function CreateMaessageOrUpdate(message){
    let data ; 
  
    try{
       
        if (message["id"]){
            delete message['service']
            delete message['tags']
            data = await prisma.contactUS.update({
                where: {id:message["id"]}, 
                data: message
            })
        }
        else
         data = await prisma.contactUS.create({data:message}); 
      

        return { success: true, data: data }
    }catch(e){
        console.error(e) ;
        return { success: false, e: e.message }
    }

}

export async function deleteMessage(id){
    
    try {

      
        const messages = await prisma.contactUS.delete(
            {where : {id:id}}
        ) ; 

        return {success: true , data: messages}; 
    } 
    catch(e){

        return {success: false , e:e.message}
    }
}
