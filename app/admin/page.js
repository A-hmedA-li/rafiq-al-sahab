

import { getServices } from "@/server/services"
import { AdminPage } from "./client"
import { getMessages } from "../../server/contactUs";
import { getUserById } from "@/server/Users";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth.config";


export default async function AdminPageHeader() {
  const userSession = await getServerSession(authConfig) ;
  const services = await getServices();
  const messages = await getMessages();
  const userData = await getUserById(userSession.user.id)
 
  const data = {
    services : services, 
    messages: messages.data,
    user: userData.data
  }
  return <AdminPage data={data} />
}