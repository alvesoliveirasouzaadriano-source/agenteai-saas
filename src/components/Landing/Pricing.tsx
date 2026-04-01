import React from 'react';
import { Check, Star } from 'lucide-react';

export const Pricing: React.FC<{ onGetStarted: () => void }> = ({ onGetStarted }) => {
  return (
    <section style={{ padding: '100px 20px', textAlign: 'center' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '48px', marginBottom: '16px' }}>Plano Simples</h2>
        <p style={{ color: 'var(--text-tertiary)', marginBottom: '80px' }}>Um Plano. Tudo Incluso.</p>
        
        <div className="glass" style={{ 
          maxWidth: '500px', 
          margin: '0 auto', 
          padding: '60px', 
          position: 'relative',
          background: 'linear-gradient(rgba(255,255,255,0.03), rgba(0,242,255,0.03))'
        }}>
          <div style={{ 
            position: 'absolute', 
            top: '-20px', 
            left: '50%', 
            transform: 'translateX(-50%)',
            background: 'var(--accent-cyan)',
            color: 'black',
            padding: '8px 20px',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <Star size={16} /> RECOMENDADO
          </div>
          
          <h3 style={{ fontSize: '32px', marginBottom: '8px' }}>Plano Profissional</h3>
          <div style={{ fontSize: '64px', fontWeight: '800', marginBottom: '24px' }}>
            <span style={{ fontSize: '24px', verticalAlign: 'middle', marginRight: '8px' }}>R$</span>
            59,90 <span style={{ fontSize: '18px', color: 'var(--text-tertiary)' }}>/mês</span>
          </div>
          
          <ul style={{ textAlign: 'left', marginBottom: '40px' }}>
            {[
              'Mensagens ilimitadas',
              'Agentes ilimitados',
              'WhatsApp + Web Chat',
              'Áudio, Imagem, Vídeo',
              'CRM Integrado',
              'Campanhas em Massa',
              'Escolha seu modelo de IA',
              'Suporte prioritário',
            ].map((feature, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', color: 'var(--text-secondary)' }}>
                <Check size={20} style={{ color: 'var(--accent-cyan)' }} /> {feature}
              </li>
            ))}
          </ul>
          
          <button 
            onClick={onGetStarted}
            style={{ 
              width: '100%', 
              background: 'white', 
              color: 'black', 
              padding: '16px', 
              borderRadius: '12px', 
              fontWeight: '800',
              fontSize: '18px'
            }}
          >
            Começar Teste Grátis de 7 Dias
          </button>
          
          <p style={{ marginTop: '24px', color: 'var(--text-tertiary)', fontSize: '14px' }}>
            Sem cartão de crédito • Cancele quando quiser
          </p>
        </div>
      </div>
    </section>
  );
};
