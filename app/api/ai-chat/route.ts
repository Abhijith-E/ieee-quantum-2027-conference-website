import { NextResponse } from 'next/server';

function createMockStream(response: string) {
  const encoder = new TextEncoder();
  
  return new ReadableStream({
    async start(controller) {
      const chunks = response.split(' ');
      
      for (let i = 0; i < chunks.length; i++) {
        // Vercel AI SDK Data Stream format: `0:"word "`
        const chunk = `0:${JSON.stringify(chunks[i] + (i < chunks.length - 1 ? ' ' : ''))}\n`;
        controller.enqueue(encoder.encode(chunk));
        // Artificial delay for streaming effect (50ms per word)
        await new Promise(resolve => setTimeout(resolve, 50));
      }
      
      controller.close();
    }
  });
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1]?.content?.toLowerCase() || "";
    
    let mockResponse = "I am the official AI assistant for IEEE CQTCS 2026. How can I help you with your conference experience today?";
    
    if (lastMessage.includes("deadline") || lastMessage.includes("when")) {
      mockResponse = "The final camera-ready paper submission deadline is September 15, 2026. Early-bird registration closes on October 1, 2026.";
    } else if (lastMessage.includes("book") || lastMessage.includes("schedule")) {
      mockResponse = "I have successfully added this session to your personal schedule! You can view it in your Dashboard under 'My Schedule'.";
    } else if (lastMessage.includes("venue") || lastMessage.includes("reach") || lastMessage.includes("travel")) {
      mockResponse = "The conference is held at the Christ (Deemed to be University) main campus in Bangalore, India. It's approximately 40km from Kempegowda International Airport. We offer discounted rates at partnered hotels nearby.";
    } else if (lastMessage.includes("visa")) {
      mockResponse = "If you require a visa to enter India, we can provide an official invitation letter. Please ensure your registration is fully paid, then you can download the visa letter from your Dashboard under 'Registration & Payments'.";
    } else if (lastMessage.includes("research") || lastMessage.includes("match")) {
      mockResponse = "Based on your profile tags ('Quantum Error Correction', 'Superconducting Qubits'), I recommend the 'Keynote: The Decade of Quantum Utility' on Day 1, and the 'Scalable Trapped-Ion Architectures' session on Day 3.";
    }

    const stream = createMockStream(mockResponse);
    
    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'x-vercel-ai-data-stream': 'v1'
      }
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
