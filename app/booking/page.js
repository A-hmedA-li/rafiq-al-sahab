import BookingPage from "@/components/pages/bookingpage"
import { get_all_events } from "@/server/google-calendar"
import { CoinsIcon } from "lucide-react";


export default async function SRBooking(){
  const bookedSlots = await get_all_events();
  let dict = {}
  for (let i in bookedSlots){
    
    dict[bookedSlots[i].start.split('T')[0]] =[];
  }
  for (let i in bookedSlots){
    let date = bookedSlots[i].start.split('T')[0];
    let hourstart = bookedSlots[i].start.split('T')[1].split('+')[0].slice(0 , -3);
    let hourend = bookedSlots[i].end.split('T')[1].split('+')[0].slice(0 , -3);
    dict[date].push(hourstart);
  }
  return (
    

    <>
      <BookingPage bookedDict={dict} />
    </>
  )
}