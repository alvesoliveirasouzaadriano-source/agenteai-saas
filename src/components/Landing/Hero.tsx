import React, { useEffect, useRef } from 'react';
import { Rocket, Play } from 'lucide-react';
import anime from 'animejs';

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    anime({
      targets: '.animate-in',
      opacity: [0, 1],
      translateY: [20, 0],
      delay: anime.stagger(100),
      easing: 'easeOutExpo',
      duration: 1000
    });
  }, []);

  return (
    <section className="hero-section" ref={heroRef} style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      padding: '120px 20px',
      position: 'relative'
    }}>
      <div className="hero-content" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '60px' }}>
        
        <div className="text-area">
          <div className="badge animate-in" style={{ 
            background: 'var(--glass-bg)', 
            padding: '8px 16px', 
            borderRadius: '20px', 
            display: 'inline-block',
            color: 'var(--accent-cyan)',
            fontSize: '14px',
            marginBottom: '24px',
            border: '1px solid var(--glass-border)'
          }}>
            🎁 Teste grátis por 7 dias!
          </div>
          
          <h1 className="animate-in" style={{ fontSize: '72px', lineHeight: '1.1', marginBottom: '24px' }}>
            Transforme seu Atendimento com <span style={{ color: 'var(--accent-cyan)' }} className="glow-cyan">IA Multicanal</span>
          </h1>
          
          <p className="animate-in" style={{ fontSize: '20px', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '600px' }}>
            Automatize vendas e suporte no WhatsApp, Web e Voz com a inteligência artificial mais avançada do mercado. Escalabilidade total para o seu negócio.
          </p>
          
          <div className="actions animate-in" style={{ display: 'flex', gap: '20px' }}>
            <button 
              onClick={onGetStarted}
              style={{ 
                background: 'var(--accent-cyan)', 
                color: 'black', 
                padding: '16px 32px', 
                borderRadius: '12px', 
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: 'var(--shadow-glow)'
              }}
            >
              <Rocket size={20} /> Começar Grátis Agora
            </button>
            <button style={{ 
              background: 'var(--glass-bg)', 
              border: '1px solid var(--glass-border)',
              color: 'white', 
              padding: '16px 32px', 
              borderRadius: '12px', 
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <Play size={20} /> Ver Demonstração
            </button>
          </div>
          
          <div className="stats animate-in" style={{ marginTop: '60px', display: 'flex', gap: '40px' }}>
            <div>
              <div style={{ fontSize: '32px', fontWeight: '800' }}>+2.000</div>
              <div style={{ color: 'var(--text-tertiary)', fontSize: '14px' }}>Empresas</div>
            </div>
            <div>
              <div style={{ fontSize: '32px', fontWeight: '800' }}>+500.000</div>
              <div style={{ color: 'var(--text-tertiary)', fontSize: '14px' }}>Conversas</div>
            </div>
            <div>
              <div style={{ fontSize: '32px', fontWeight: '800' }}>4.9/5</div>
              <div style={{ color: 'var(--text-tertiary)', fontSize: '14px' }}>Avaliação</div>
            </div>
          </div>
        </div>

        <div className="visual-area animate-in">
           <div className="glass" style={{ width: '100%', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ 
                position: 'absolute', 
                width: '100%', 
                height: '100%', 
                background: 'linear-gradient(45deg, rgba(0,242,255,0.1) 0%, rgba(188,19,254,0.1) 100%)',
                filter: 'blur(30px)',
                zIndex: 0
              }} />
              <div className="floating-card glass" style={{ padding: '24px', width: '300px', zIndex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ width: '40px', height: '40px', background: 'var(--accent-cyan)', borderRadius: '50%' }} />
                  <div>
                    <div style={{ fontWeight: 'bold' }}>Agente Camila</div>
                    <div style={{ fontSize: '12px', color: 'var(--accent-green)' }}>Ativo agora</div>
                  </div>
                </div>
                <div style={{ background: 'var(--bg-tertiary)', padding: '12px', borderRadius: '8px', fontSize: '14px', marginBottom: '8px' }}>
                  Olá! Como posso ajudar sua empresa hoje?
                </div>
                <div style={{ background: 'var(--accent-blue)', padding: '12px', borderRadius: '8px', fontSize: '14px', alignSelf: 'flex-end', marginLeft: '40px' }}>
                  Quero automatizar meu WhatsApp.
                </div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};
