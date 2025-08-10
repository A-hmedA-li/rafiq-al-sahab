"use server"
import { google } from 'googleapis';


const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        
      },
      scopes: ['https://www.googleapis.com/auth/calendar'],
    });

const calendar = google.calendar({version: 'v3' , auth}) ; 
  
export async function get_all_events() {

  const today = new Date(2024, 1, 1);
  today.setHours(0, 0, 0, 0);
  try{
  const response =  await calendar.events.list({
      calendarId: process.env.TARGET_GOOGLE_CALENDAR,
      timeMin: today.toISOString(),
      
  })

    const events = response.data.items.map(event => ({
      id: event.id,
      summary: event.summary,
      start: event.start.dateTime || event.start.date,
      end: event.end.dateTime || event.end.date,
      location: event.location,
      description: event.description,
      htmlLink: event.htmlLink
    }));


    return events; 
  }catch(err){
    console.log(err)
    return false

  }
  
}

export async function book_an_event(event ){

 
  try{

      await calendar.events.insert({
        calendarId: process.env.TARGET_GOOGLE_CALENDAR,
      resource: event,
    })
    
    return true ; 
  }
  catch(error){
    console.log(error)
    return false
  }
}