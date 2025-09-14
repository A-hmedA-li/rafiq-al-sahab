import HomePage from './client'
import { getHomePageServices } from '@/server/services';

export default async function Home(){
  const services = await  getHomePageServices();
  
  const data = {
    services: services.data
  }
  return <HomePage data={data}/>

}