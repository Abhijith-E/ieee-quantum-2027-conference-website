"use client";

import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { Session } from './types';
import { Document, Page, Text, View, StyleSheet, pdf } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 40, fontFamily: 'Helvetica' },
  header: { fontSize: 24, marginBottom: 20, textAlign: 'center', color: '#0F172A', fontWeight: 'bold' },
  sessionContainer: { marginBottom: 15, paddingBottom: 15, borderBottom: '1 solid #E2E8F0' },
  time: { fontSize: 10, color: '#64748B', marginBottom: 4 },
  title: { fontSize: 14, color: '#0F172A', fontWeight: 'bold', marginBottom: 4 },
  speaker: { fontSize: 12, color: '#334155' },
  type: { fontSize: 10, color: '#D4AF37', marginTop: 4 },
});

const ProgramDocument = ({ sessions }: { sessions: Session[] }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.header}>CQTCS 2026 Technical Program</Text>
      {sessions.map(session => (
        <View key={session.id} style={styles.sessionContainer}>
          <Text style={styles.time}>{session.day} | {session.startTime} - {session.endTime}</Text>
          <Text style={styles.title}>{session.title}</Text>
          {session.speaker && <Text style={styles.speaker}>{session.speaker.name} - {session.speaker.institution}</Text>}
          <Text style={styles.type}>[{session.type}]</Text>
        </View>
      ))}
    </Page>
  </Document>
);

interface PdfGeneratorProps {
  filteredSessions: Session[];
}

export default function PdfGenerator({ filteredSessions }: PdfGeneratorProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleDownload = async () => {
    setIsGenerating(true);
    try {
      const blob = await pdf(<ProgramDocument sessions={filteredSessions} />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'CQTCS_Program.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  if (!isMounted) return null;

  return (
    <button
      onClick={handleDownload}
      disabled={isGenerating}
      className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gold-dark bg-gold/10 border border-gold/30 rounded-lg hover:bg-gold hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <Download size={16} />
      {isGenerating ? 'Generating...' : 'Download Program PDF'}
    </button>
  );
}
