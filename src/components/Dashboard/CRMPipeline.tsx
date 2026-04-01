import React from 'react';
import { User, Calendar, MoreHorizontal } from 'lucide-react';

const leadStages = [
  { id: 'novo', name: 'Novo Lead', color: 'var(--accent-blue)', leads: [
    { id: 1, name: 'Ricardo Santos', phone: '(11) 98765-4321', date: 'Hoje', tag: 'Interessado' },
    { id: 2, name: 'Ana Paula Silva', phone: '(21) 91234-5678', date: 'Hoje', tag: 'Dúvida' },
  ]},
  { id: 'contato', name: 'Em Contato', color: 'var(--accent-cyan)', leads: [
    { id: 3, name: 'Carlos Oliveira', phone: '(31) 99876-0000', date: 'Ontem', tag: 'Agendamento' },
  ]},
  { id: 'venda', name: 'Fechamento', color: 'var(--accent-green)', leads: [
    { id: 4, name: 'Fernanda Costa', phone: '(41) 95555-4444', date: 'Segunda', tag: 'Contrato' },
  ]},
];

export const CRMPipeline: React.FC = () => {
  return (
    <div style={{ display: 'flex', gap: '20px', overflowX: 'auto', paddingBottom: '20px' }}>
      {leadStages.map((stage) => (
        <div key={stage.id} style={{ minWidth: '350px', background: 'var(--bg-tertiary)', borderRadius: '12px', padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '18px' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: stage.color }}></span>
              {stage.name}
            </h3>
            <span style={{ color: 'var(--text-tertiary)', fontSize: '14px' }}>({stage.leads.length})</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {stage.leads.map((lead) => (
              <div key={lead.id} className="glass" style={{ padding: '20px', cursor: 'grab' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '32px', height: '32px', background: 'var(--bg-primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <User size={16} />
                    </div>
                    <span style={{ fontWeight: 'bold' }}>{lead.name}</span>
                  </div>
                  <MoreHorizontal size={16} color="var(--text-tertiary)" />
                </div>
                
                <div style={{ color: 'var(--text-secondary)', fontSize: '13px', marginBottom: '16px' }}>
                  {lead.phone}
                </div>

                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <span style={{ padding: '4px 8px', borderRadius: '4px', background: 'rgba(255,255,255,0.05)', fontSize: '10px', color: 'var(--accent-cyan)', border: '1px solid rgba(0, 242, 255, 0.2)' }}>
                    {lead.tag}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-tertiary)', fontSize: '10px', marginLeft: 'auto' }}>
                    <Calendar size={12} /> {lead.date}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button style={{ width: '100%', marginTop: '20px', padding: '12px', border: '1px dashed var(--glass-border)', borderRadius: '8px', color: 'var(--text-tertiary)', fontSize: '14px' }}>
            + Adicionar Contato
          </button>
        </div>
      ))}
    </div>
  );
};
