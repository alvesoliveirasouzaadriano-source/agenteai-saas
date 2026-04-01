import React, { useState } from 'react';
import { QrCode, Link, ShieldCheck, Globe } from 'lucide-react';

export const Integrations: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'uazapi' | 'meta' | 'zapi' | 'web'>('uazapi');
  const [loading, setLoading] = useState(false);
  
  const [metaConfig, setMetaConfig] = useState({ phoneId: '', token: '' });
  const [zapiConfig, setZapiConfig] = useState({ instanceId: '', token: '' });

  const handleSaveMeta = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Configurações Meta salvas!');
    }, 1500);
  };

  const handleSaveZapi = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Configurações Z-API salvas!');
    }, 1500);
  };

  const integrations = [
    { id: 'uazapi', label: 'UAZAPI (QR Code)', icon: QrCode, recommended: true },
    { id: 'meta', label: 'Meta API (Oficial)', icon: ShieldCheck },
    { id: 'zapi', label: 'Z-API', icon: Link },
    { id: 'web', label: 'Chat Web', icon: Globe },
  ];

  return (
    <div className="integrations-container">
      <div style={{ display: 'flex', gap: '12px', marginBottom: '40px', overflowX: 'auto', paddingBottom: '10px' }}>
        {integrations.map((int) => (
          <button
            key={int.id}
            onClick={() => setActiveSubTab(int.id as any)}
            style={{
              padding: '12px 24px',
              borderRadius: '8px',
              background: activeSubTab === int.id ? 'var(--bg-tertiary)' : 'var(--glass-bg)',
              border: activeSubTab === int.id ? '1px solid var(--accent-cyan)' : '1px solid var(--glass-border)',
              color: activeSubTab === int.id ? 'white' : 'var(--text-tertiary)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              position: 'relative',
              whiteSpace: 'nowrap'
            }}
          >
            <int.icon size={18} />
            {int.label}
            {int.recommended && (
              <span style={{ position: 'absolute', top: '-10px', right: '10px', background: 'var(--accent-cyan)', color: 'black', fontSize: '10px', padding: '2px 6px', borderRadius: '10px', fontWeight: 'bold' }}>
                RECOMENDADO
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="glass" style={{ padding: '40px' }}>
        {activeSubTab === 'uazapi' && (
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ marginBottom: '16px' }}>Conexão Instantânea via QR Code</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', maxWidth: '600px', margin: '0 auto' }}>
              A UAZAPI é a forma mais fácil de conectar seu WhatsApp. Basta escanear o QR Code abaixo diretamente no seu painel.
            </p>
            <div className="glass" style={{ width: '250px', height: '250px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white', borderRadius: '12px' }}>
               <QrCode size={180} color="black" />
            </div>
            <p style={{ marginTop: '24px', fontSize: '14px', color: 'var(--text-tertiary)' }}>
              Status: <span style={{ color: 'var(--accent-blue)' }}>Aguardando conexão...</span>
            </p>
          </div>
        )}

        {activeSubTab === 'meta' && (
          <div>
            <h3>Integração Meta WhatsApp API (Oficial)</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>Utilize a API oficial do WhatsApp Business para maior escalabilidade.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                 <label style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>Phone Number ID *</label>
                 <input 
                  className="glass" 
                  value={metaConfig.phoneId}
                  onChange={(e) => setMetaConfig({...metaConfig, phoneId: e.target.value})}
                  placeholder="ID do seu número no Meta" 
                  style={{ padding: '12px', background: 'transparent', color: 'white', border: '1px solid var(--glass-border)', borderRadius: '8px' }} 
                 />
               </div>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                 <label style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>Access Token *</label>
                 <input 
                  type="password" 
                  className="glass" 
                  value={metaConfig.token}
                  onChange={(e) => setMetaConfig({...metaConfig, token: e.target.value})}
                  placeholder="Token de Acesso Permanente" 
                  style={{ padding: '12px', background: 'transparent', color: 'white', border: '1px solid var(--glass-border)', borderRadius: '8px' }} 
                 />
               </div>
            </div>
            <button 
              onClick={handleSaveMeta}
              disabled={loading}
              style={{ background: 'var(--accent-cyan)', color: 'black', padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold' }}
            >
              {loading ? 'Salvando...' : 'Salvar Configurações Meta'}
            </button>
          </div>
        )}

        {activeSubTab === 'zapi' && (
          <div>
            <h3>Integração Z-API</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>Conecte sua instância Z-API para automação via Webhooks.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                 <label style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>Instance ID *</label>
                 <input 
                  className="glass" 
                  value={zapiConfig.instanceId}
                  onChange={(e) => setZapiConfig({...zapiConfig, instanceId: e.target.value})}
                  placeholder="ID da sua Instância" 
                  style={{ padding: '12px', background: 'transparent', color: 'white', border: '1px solid var(--glass-border)', borderRadius: '8px' }} 
                 />
               </div>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                 <label style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>Instance Token *</label>
                 <input 
                  type="password" 
                  className="glass" 
                  value={zapiConfig.token}
                  onChange={(e) => setZapiConfig({...zapiConfig, token: e.target.value})}
                  placeholder="Token da Instância" 
                  style={{ padding: '12px', background: 'transparent', color: 'white', border: '1px solid var(--glass-border)', borderRadius: '8px' }} 
                 />
               </div>
            </div>
            <button 
              onClick={handleSaveZapi}
              disabled={loading}
              style={{ background: 'var(--accent-cyan)', color: 'black', padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold' }}
            >
              {loading ? 'Salvando...' : 'Salvar Configurações Z-API'}
            </button>
          </div>
        )}

        {activeSubTab === 'web' && (
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '80px', height: '80px', background: 'rgba(0, 242, 255, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
              <Globe size={40} color="var(--accent-cyan)" />
            </div>
            <h3>Chat Web Automático</h3>
            <p style={{ marginTop: '16px', color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto 30px' }}>
              Ao criar seu agente, um link de chat web exclusivo é gerado. Você pode incorporá-lo em seu site ou compartilhar diretamente.
            </p>
            <div className="glass" style={{ padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderRadius: '12px' }}>
               <code style={{ color: 'var(--accent-cyan)', fontSize: '16px' }}>https://meuagente.ai/chat/c54e-ab55-3f49</code>
               <button 
                onClick={() => {
                  navigator.clipboard.writeText('https://meuagente.ai/chat/c54e-ab55-3f49');
                  alert('Copiado!');
                }}
                style={{ background: 'var(--bg-tertiary)', padding: '8px 16px', borderRadius: '6px', color: 'white', border: '1px solid var(--glass-border)' }}
               >
                 Copiar Link
               </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
