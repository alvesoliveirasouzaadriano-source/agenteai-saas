import React from 'react';
import { MessageSquare, Phone, Image, FileText, Video, Globe } from 'lucide-react';

const featureData = [
  { icon: Globe, title: 'Agente IA na Web', desc: 'Chat inteligente no seu site. Capture leads enquanto seus concorrentes perdem vendas.', accent: 'var(--accent-cyan)' },
  { icon: MessageSquare, title: 'WhatsApp Automático', desc: 'Responda clientes instantaneamente no WhatsApp. Taxa de 98% de abertura.', accent: 'var(--accent-green)' },
  { icon: Phone, title: 'Atendimento por Voz', desc: 'IA que ouve e responde áudios. Atendimento humanizado e rápido.', accent: 'var(--accent-blue)' },
  { icon: Image, title: 'Análise de Imagens', desc: 'Envie fotos de produtos ou documentos. A IA entende e responde.', accent: 'var(--accent-violet)' },
  { icon: FileText, title: 'Documentos e PDFs', desc: 'Sua IA lê contratos, propostas e documentos. Processamento em segundos.', accent: 'var(--accent-cyan)' },
  { icon: Video, title: 'Análise de Vídeos', desc: 'Entenda o conteúdo de vídeos e responda perguntas sobre eles.', accent: 'var(--accent-violet)' },
];

export const Features: React.FC = () => {
  return (
    <section className="features-section" style={{ padding: '100px 20px', background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '48px', marginBottom: '16px' }}>Atendimento Multicanal</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-tertiary)', fontSize: '20px', marginBottom: '60px' }}>
          Sua IA Atende de Todas as Formas
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {featureData.map((f, i) => (
            <div key={i} className="glass" style={{ padding: '40px', transition: 'var(--transition)' }}>
              <f.icon size={48} style={{ color: f.accent, marginBottom: '24px' }} />
              <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>{f.title}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
