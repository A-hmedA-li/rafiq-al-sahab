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
    
    for (let i =0 ; i < differenceInHalfs (hourstart , hourend) ; i ++){
    console.log(hourstart)

      dict[date].push(hourstart);
      hourstart = addHalf(hourstart) ; 
      console.log(hourstart)
    }
  }


  return (
    

    <>
      <BookingPage bookedDict={dict} />
    </>
  )
}


function differenceInHalfs(start , end){
    let MinStart = parseInt(start.split(':')[0])*60 + parseInt(start.split(':')[1] ) ;
    
    let MinENd = parseInt(end.split(':')[0]) * 60 + parseInt(end.split(':')[1]) ; 
    
    return (MinENd - MinStart)/30 ; 
}

function addHalf(time){
    let Min = parseInt(time.split(':')[0])*60 + parseInt(time.split(':')[1] ) ;
    Min +=30 ; 

    return String(Math.floor(Min/60)).padStart(2,'0') + ":" + String(Min%60).padStart(2,'0') ; 

}