import React, { StrictMode, Component } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught Error caught by ErrorBoundary:", error, errorInfo);
  }

  handleReset = () => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.clear();
      }
      if (typeof window !== 'undefined' && window.sessionStorage) {
        sessionStorage.clear();
      }
    } catch (e) {
      console.error(e);
    }
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: '100vh', background: '#070a13', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center', fontFamily: 'sans-serif' }}>
          <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444', padding: '2rem', borderRadius: '16px', maxWidth: '500px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#f87171' }}>Quality Halal Market</h2>
            <p style={{ color: '#cbd5e1', marginBottom: '1rem', fontSize: '0.95rem' }}>
              A temporary browser data issue was detected. Click below to clear browser cache and reload the site instantly.
            </p>
            {this.state.error && (
              <pre style={{ color: '#f87171', background: 'rgba(0,0,0,0.6)', padding: '0.75rem', borderRadius: '8px', fontSize: '0.75rem', textAlign: 'left', overflowX: 'auto', marginBottom: '1.25rem', whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
                {this.state.error.toString()}
              </pre>
            )}
            <button 
              onClick={this.handleReset}
              style={{ background: '#10b981', color: 'white', border: 'none', padding: '0.85rem 1.75rem', borderRadius: '50px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', boxShadow: '0 4px 14px rgba(16, 185, 129, 0.4)' }}
            >
              🔄 Refresh & Reload Site
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
