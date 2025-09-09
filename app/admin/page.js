
import { getServices } from "@/server/services"
import { AdminPage } from "./client"
import { getMessages } from "../../server/contactUs";


export default async function AdminPageHeader() {
  const services = await getServices();
  const messages = await getMessages(); 

  const data = {
    services : services, 
    messages: messages.data,
  }
  return <AdminPage data={data} />
}