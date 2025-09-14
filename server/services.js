
"use server"

import prisma from "@/lib/prisma"

import { addServiceToTranslation , DeleteServiceFromTranslation } from "@/lib/translationUtil";
import { saveImageFile, deleteImageFile } from "@/lib/images";


export async function CreateORUpdateService(service) {



    delete service['createdAt']
    delete service['updatedAt']
    let data ; 
    let imageChanged = false ; 

   
    if (service.image.slice(0,4) == 'data'){
        service.image = await saveImageFile(service.image, service.title , 'services' )
        imageChanged = true ; 
    }
    try{
         console.log(service)
        if (service['id'] ){
            
            service['id'] = parseInt(service['id']);
            const oldrecord = await prisma.service.findUnique({
                where :{id:service.id}
            })
            if (imageChanged)
                deleteImageFile(oldrecord.image) ; 
                
            
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
        const service = await prisma.service.findUnique({where: {id:id}})

        console.log('before')
        deleteImageFile(service.image) ; 
        console.log('after')

        await prisma.service.delete({
            where: {
                id: id
            }, 
        })

        DeleteServiceFromTranslation(id)
        

        return { success: true}

    }
    catch(e){
        console.log(e) ;
        return { success: false, e: e.message }
        
    }
}




export async function getHomePageServices(){

    try{
        const data = await prisma.service.findMany({
            where: {isOnMainPage : true},
            select: {
                image: true, 
                title: true, 
                description: true, 
                color: true, 
            }
        })

        console.log(data);
        return {success:true , data:data}
    }
    catch(e){
        return {success:true , e:e.message}
    }
}