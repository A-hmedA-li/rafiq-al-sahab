// app/api/calendar/route.js
import { google } from 'googleapis';

export async function POST(request) {
  const { accessToken, eventDetails } = await request.json();
  
  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({ access_token: accessToken });

  const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

  try {
    const event = await calendar.events.insert({
      calendarId: 'primary',
      resource: eventDetails,
    });

    return Response.json({ success: true, event: event.data });
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}