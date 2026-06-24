import { NextResponse, type NextRequest } from 'next/server';

export async function updateSession(request: NextRequest) {
  // Mock session update for Supabase
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  return response;
}
