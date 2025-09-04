
import { getServices } from "@/server/services"
import { AdminPage } from "./client"


export default async function AdminPageHeader() {
  const services = await getServices();
  const data = {
    services : services , 
  }
  return <AdminPage data={data} />
}