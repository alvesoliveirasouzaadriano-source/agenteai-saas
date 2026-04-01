import { useState } from 'react';
import { Hero } from './components/Landing/Hero';
import { Features } from './components/Landing/Features';
import { Pricing } from './components/Landing/Pricing';
import { DashboardLayout } from './components/Dashboard/Layout';

function App() {
  const [view, setView] = useState<'landing' | 'dashboard'>('landing');

  if (view === 'dashboard') {
    return <DashboardLayout onBack={() => setView('landing')} />;
  }

  return (
    <div className="app-container">
      <Hero onGetStarted={() => setView('dashboard')} />
      <Features />
      <Pricing onGetStarted={() => setView('dashboard')} />
      
      <footer style={{ padding: '40px', textAlign: 'center', color: 'var(--text-tertiary)', background: 'var(--bg-secondary)' }}>
        <p>© 2026 Agente AI - Transformando o Atendimento com Inteligência Multicanal</p>
      </footer>
    </div>
  );
}

export default App;
