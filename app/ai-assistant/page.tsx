import React from 'react';
import AIAssistantFullPage from '@/components/ai/AIAssistantFullPage';

export const metadata = {
  title: 'AI Assistant - IEEE CQTCS 2026',
  description: 'Official AI conference assistant powered by Claude.',
};

export default function AIAssistantPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-20">
      <AIAssistantFullPage />
    </main>
  );
}
