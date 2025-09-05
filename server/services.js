
"use server"

import prisma from "@/lib/prisma"

import { addServiceToTranslation } from "@/lib/translationUtil";

export async function CreateORUpdateService(service) {


   
    let data ; 
    try{

        if (service['id']){
            data = await prisma.service.update({
                where: {id : service.id }, 
                data: service
            })

        }
        else{

            data = await prisma.service.create({ 
                    data: service
                })

                
        }

       let translation = {} 
       translation.title = data.title ; 
       translation.arabicTitle = data.arabicTitle; 
       translation.description = data.description; 
        translation.features = data.features ; 

        const translationResult = await addServiceToTranslation (data.id , translation) ;
        console.log(translationResult)
        return { success: true, data: data }

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

export async function updateService(service) {

    
}