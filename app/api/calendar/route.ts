import { NextResponse } from 'next/server';
import { DEADLINES } from '@/components/dates/data';

function formatDateForICS(dateString: string) {
  // Assuming dateString is YYYY-MM-DD
  const date = new Date(dateString);
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');
  
  // Create an all-day event format: YYYYMMDD
  return `${year}${month}${day}`;
}

export async function GET() {
  const events = DEADLINES.map(deadline => {
    const startStr = formatDateForICS(deadline.date);
    
    // For all-day events, the end date should be the day after the start date
    const endDate = new Date(deadline.date);
    endDate.setUTCDate(endDate.getUTCDate() + 1);
    const endStr = formatDateForICS(endDate.toISOString().split('T')[0]);

    return [
      'BEGIN:VEVENT',
      `UID:${deadline.id}@cqtcs.ieee.org`,
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
      `DTSTART;VALUE=DATE:${startStr}`,
      `DTEND;VALUE=DATE:${endStr}`,
      `SUMMARY:CQTCS: ${deadline.title}`,
      'END:VEVENT'
    ].join('\r\n');
  });

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//CQTCS IEEE 2026//Calendar//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    ...events,
    'END:VCALENDAR'
  ].join('\r\n');

  return new NextResponse(icsContent, {
    headers: {
      'Content-Type': 'text/calendar; charset=utf-8',
      'Content-Disposition': 'attachment; filename="CQTCS_2026_Deadlines.ics"',
    },
  });
}
