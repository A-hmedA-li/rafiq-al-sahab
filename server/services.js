
"use server"

import prisma from "@/lib/prisma"

export async function CreateService(FormData) {
    try{

        const {  title , arabicTitle ,
            description , features  , color , bgColor, isActive } = FormData;

        const submission = await prisma.service.create({
                data: {
                    title:title, 
                    arabicTitle:arabicTitle, 
                    description:description,
                    features:features,

                    // BE CAREFULL
                    isActive: isActive,
                   
                }
            })

            return { success: true, data: submission }

    }catch(e){
        console.log(e); 

        return { success: false, e: e.message }
    }
}


export async function getServices() {

    const services = await prisma.service.findMany();
 
    return services ; 
}

export async function deleteService(id) {
    try{
        await prisma.service.delete({
            where: {
                id: id
            }, 
        })

        return { success: true}

    }
    catch(e){
        console.log(e) ;
        return { success: false, e: e.message }
        
    }
}