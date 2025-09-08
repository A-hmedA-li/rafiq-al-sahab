
"use server"

import prisma from "@/lib/prisma"

import { addServiceToTranslation , DeleteServiceFromTranslation } from "@/lib/translationUtil";
import { saveImageFile, deleteImageFile } from "@/lib/images";
export async function CreateORUpdateService(service) {



    delete service['createdAt']
    delete service['updatedAt']
    let data ; 

    service.image = saveImageFile(service.image, service.title , 'services' )
    console.log(service.image)
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

        const translationResult =  addServiceToTranslation (data.id , translation) ;
        console.log(translationResult) ; 
    
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

        DeleteServiceFromTranslation(id )

        return { success: true}

    }
    catch(e){
        console.log(e) ;
        return { success: false, e: e.message }
        
    }
}

export async function updateService(service) {

    
}