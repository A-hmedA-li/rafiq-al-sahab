import { NextResponse } from 'next/server'

import { google } from 'googleapis';

export async function POST(req , res) {
  console.log(res)
  try {

    const event = await req.json();
    
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        
      },
      scopes: ['https://www.googleapis.com/auth/calendar'],
    });
   

    const calendar = google.calendar({ version: 'v3', auth });
    



    const response = await calendar.events.insert({
      calendarId: process.env.TARGET_GOOGLE_CALENDAR,
      resource: event,
    
    });
 

    return NextResponse.json({message: "every thing is alright"},  {status: 200 })
  } catch (error) {
    console.error('Error creating event:', error);
    return NextResponse.json( {error : 'Error creating calendar event'} , {status: 500} )
  }

}