"use client";

import React from 'react';
import { ConferenceDeadline } from './data';
import TimelineNode from './TimelineNode';

interface DatesTimelineProps {
  deadlines: ConferenceDeadline[];
}

export default function DatesTimeline({ deadlines }: DatesTimelineProps) {
  // Sort deadlines chronologically just in case
  const sortedDeadlines = [...deadlines].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <section className="w-full py-20 px-6 bg-white relative z-10">
      <div className="max-w-5xl mx-auto relative pt-10">
        
        {/* We rely on the absolute line generated inside TimelineNode to connect the nodes. */}
        
        <div className="flex flex-col">
          {sortedDeadlines.map((deadline, idx) => (
            <TimelineNode 
              key={deadline.id} 
              deadline={deadline} 
              isLeft={idx % 2 === 0} 
              isLast={idx === sortedDeadlines.length - 1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
