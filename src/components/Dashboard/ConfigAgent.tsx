import React, { useState } from 'react';
import { Save, AlertCircle, Loader2, CheckCircle } from 'lucide-react';
import { apiService } from '../../services/api';

export const ConfigAgent: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    nome: '',
    area: '',
    servicos: '',
    tom: '',
    instrucoes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    if (!formData.nome || !formData.area || !formData.servicos || !formData.tom) {
      alert('Por favor, preencha todos os campos obrigatórios (*)');
      return;
    }

    setLoading(true);
    setStatus('idle');
    try {
      await apiService.updateAgentConfig(formData);
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Erro ao salvar:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass" style={{ padding: '40px', maxWidth: '800px' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '24px' }}>Configuração do Agente</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>Nome do Agente *</label>
          <input 
            className="glass"
            placeholder="Ex: Camila"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            style={{ padding: '12px', background: 'transparent', color: 'white', border: '1px solid var(--glass-border)', borderRadius: '8px' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>Área de Atuação *</label>
          <input 
            className="glass"
            placeholder="Ex: Clínica Estética"
            name="area"
            value={formData.area}
            onChange={handleChange}
            style={{ padding: '12px', background: 'transparent', color: 'white', border: '1px solid var(--glass-border)', borderRadius: '8px' }}
          />
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
        <label style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>Serviços / Produtos / Links * (até 50.000 chars)</label>
        <textarea 
          className="glass"
          placeholder="Liste seus serviços e links importantes..."
          name="servicos"
          value={formData.servicos}
          onChange={handleChange}
          style={{ padding: '12px', minHeight: '120px', background: 'transparent', color: 'white', border: '1px solid var(--glass-border)', borderRadius: '8px' }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
        <label style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>Tom de Voz *</label>
        <select 
          className="glass"
          name="tom"
          value={formData.tom}
          onChange={handleChange}
          style={{ padding: '12px', background: 'var(--bg-tertiary)', color: 'white', border: '1px solid var(--glass-border)', borderRadius: '8px' }}
        >
          <option value="">Selecione...</option>
          <option value="amigavel">Amigável e Empático</option>
          <option value="profissional">Profissional e Formal</option>
          <option value="direto">Direto e Objetivo</option>
        </select>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '30px' }}>
        <label style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>Instruções Personalizadas (Opcional)</label>
        <textarea 
          className="glass"
          placeholder="Ex: Nunca dê preços sem o lead deixar o email..."
          name="instrucoes"
          value={formData.instrucoes}
          onChange={handleChange}
          style={{ padding: '12px', minHeight: '100px', background: 'transparent', color: 'white', border: '1px solid var(--glass-border)', borderRadius: '8px' }}
        />
      </div>

      <div className="glass" style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(0, 242, 255, 0.05)', marginBottom: '30px' }}>
         <AlertCircle size={20} style={{ color: 'var(--accent-cyan)' }} />
         <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
           Essas informações alimentam o "Prompt do Sistema" do seu agente de IA. 
           Quanto mais detalhado, melhor o atendimento.
         </p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <button 
          onClick={handleSave}
          disabled={loading}
          style={{ 
            background: status === 'success' ? 'var(--accent-green)' : 'var(--accent-cyan)', 
            color: 'black', 
            padding: '16px 32px', 
            borderRadius: '8px', 
            fontWeight: 'bold', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px',
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.7 : 1,
            transition: 'all 0.3s ease'
          }}
        >
          {loading ? <Loader2 className="animate-spin" size={20} /> : status === 'success' ? <CheckCircle size={20} /> : <Save size={20} />}
          {loading ? 'Salvando...' : status === 'success' ? 'Atualizado!' : 'Salvar e Atualizar Agente'}
        </button>

        {status === 'error' && (
          <span style={{ color: '#ff4444', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <AlertCircle size={16} /> Erro ao conectar com o servidor.
          </span>
        )}
      </div>
    </div>
  );
};
