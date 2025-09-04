
import { getServices } from '@/server/services'
import {ServicesPage} from './clinet'


export default async function ServicePageHeader(){

  const servicesGot = await getServices() ;

  return <ServicesPage  servicesGot={servicesGot}/>
} 