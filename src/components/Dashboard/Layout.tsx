import React, { useState } from 'react';
import { Settings, Share2, Users, Send, ArrowLeft, LayoutDashboard } from 'lucide-react';
import { ConfigAgent } from './ConfigAgent';
import { Integrations } from './Integrations';
import { CRMPipeline } from './CRMPipeline';
import { Campaigns } from './Campaigns';

interface DashboardProps {
  onBack: () => void;
}

export const DashboardLayout: React.FC<DashboardProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'config' | 'channels' | 'crm' | 'campaigns'>('config');

  const menuItems = [
    { id: 'config', label: 'Configuração', icon: Settings },
    { id: 'channels', label: 'Canais de Atendimento', icon: Share2 },
    { id: 'crm', label: 'CRM / Contatos', icon: Users },
    { id: 'campaigns', label: 'WhatsApp em Massa', icon: Send },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-primary)' }}>
      {/* Sidebar */}
      <aside className="glass" style={{ width: '280px', borderRight: '1px solid var(--glass-border)', padding: '40px 20px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '60px', color: 'var(--accent-cyan)' }}>
          <LayoutDashboard size={32} />
          <h2 style={{ fontSize: '20px' }}>Agente AI</h2>
        </div>

        <nav style={{ flex: 1 }}>
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px',
                borderRadius: '8px',
                marginBottom: '8px',
                color: activeTab === item.id ? 'white' : 'var(--text-tertiary)',
                background: activeTab === item.id ? 'rgba(0, 242, 255, 0.1)' : 'transparent',
                border: activeTab === item.id ? '1px solid var(--accent-cyan)' : '1px solid transparent',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <item.icon size={20} />
              <span style={{ fontWeight: activeTab === item.id ? 'bold' : 'normal' }}>{item.label}</span>
            </button>
          ))}
        </nav>

        <button onClick={onBack} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-tertiary)', padding: '16px', background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <ArrowLeft size={18} /> Voltar ao Site
        </button>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '60px', overflowY: 'auto' }}>
        <header style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: '32px' }}>{menuItems.find(m => m.id === activeTab)?.label}</h1>
            <p style={{ color: 'var(--text-tertiary)' }}>Gerencie seu agente de IA multicanal</p>
          </div>
          
          <div className="glass" style={{ padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '12px', borderRadius: '8px' }}>
             <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent-green)' }} />
             <span style={{ fontSize: '14px' }}>Sistema Operacional</span>
          </div>
        </header>

        {/* Content Area */}
        <section className="dashboard-content">
          {activeTab === 'config' && <ConfigAgent />}
          {activeTab === 'channels' && <Integrations />}
          {activeTab === 'crm' && <CRMPipeline />}
          {activeTab === 'campaigns' && <Campaigns />}
        </section>
      </main>
    </div>
  );
};
