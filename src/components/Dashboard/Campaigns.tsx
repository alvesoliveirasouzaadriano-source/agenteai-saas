import React, { useState } from 'react';
import { Send, Users, Clock, AlertCircle, FileUp, Play } from 'lucide-react';

export const Campaigns: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    delay: '30'
  });

  const handleStart = () => {
    if (!formData.name || !formData.message) {
      alert('Por favor, preencha o nome da campanha e a mensagem.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Campanha iniciada com sucesso!');
    }, 2000);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '30px' }}>
      <div className="glass" style={{ padding: '40px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Send size={24} color="var(--accent-cyan)" />
          Disparo em Massa
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>Nome da Campanha</label>
            <input 
              className="glass"
              placeholder="Ex: Promoção de Verão"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              style={{ padding: '12px', background: 'transparent', color: 'white', border: '1px solid var(--glass-border)', borderRadius: '8px' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>Mensagem (Suporta variáveis como {`{nome}`})</label>
            <textarea 
              className="glass"
              placeholder="Olá {nome}, temos uma oferta especial para você..."
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              style={{ padding: '12px', minHeight: '150px', background: 'transparent', color: 'white', border: '1px solid var(--glass-border)', borderRadius: '8px' }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>Importar Contatos (CSV / Excel)</label>
              <div 
                className="glass" 
                style={{ 
                  border: '2px dashed var(--glass-border)', 
                  padding: '20px', 
                  textAlign: 'center', 
                  borderRadius: '12px',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                <FileUp size={24} color="var(--text-tertiary)" />
                <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Clique ou arraste o arquivo</span>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>Delay entre mensagens (segundos)</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Clock size={20} color="var(--text-tertiary)" />
                <input 
                  type="number"
                  className="glass"
                  value={formData.delay}
                  onChange={(e) => setFormData({...formData, delay: e.target.value})}
                  style={{ padding: '12px', flex: 1, background: 'transparent', color: 'white', border: '1px solid var(--glass-border)', borderRadius: '8px' }}
                />
              </div>
            </div>
          </div>
        </div>

        <button 
          onClick={handleStart}
          disabled={loading}
          style={{ 
            marginTop: '40px',
            background: 'var(--accent-cyan)', 
            color: 'black', 
            padding: '16px 32px', 
            borderRadius: '8px', 
            fontWeight: 'bold', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px' 
          }}
        >
          {loading ? 'Processando...' : <><Play size={20} /> Iniciar Disparo</>}
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div className="glass" style={{ padding: '24px' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Users size={18} color="var(--accent-blue)" />
            Resumo
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-tertiary)' }}>Contatos:</span>
              <span>0 selecionados</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-tertiary)' }}>Estimativa:</span>
              <span>0 min</span>
            </div>
          </div>
        </div>

        <div className="glass" style={{ padding: '24px', border: '1px solid rgba(255, 171, 0, 0.2)' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px', color: '#ffab00' }}>
            <AlertCircle size={18} />
            Aviso Anti-Ban
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
            Recomendamos um delay mínimo de 30 segundos entre mensagens para evitar o bloqueio do seu número pelo WhatsApp.
          </p>
        </div>
      </div>
    </div>
  );
};
