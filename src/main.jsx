import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught:", error, info);
    this.setState({ info });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 40, background: '#111', color: '#ff5555', fontFamily: 'monospace', minHeight: '100vh', zIndex: 999999 }}>
          <h1 style={{ color: '#ff3333' }}>⚠️ Application Error:</h1>
          <pre style={{ background: '#222', padding: 20, borderRadius: 8, overflowX: 'auto', color: '#fff' }}>
            {this.state.error?.toString()}
          </pre>
          <pre style={{ background: '#181818', padding: 20, borderRadius: 8, overflowX: 'auto', color: '#aaa', marginTop: 10 }}>
            {this.state.info?.componentStack || this.state.error?.stack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

// Global window error listener
window.addEventListener('error', (event) => {
  console.error("Window Error:", event.error || event.message);
  const root = document.getElementById('root');
  if (root && !root.innerHTML.trim()) {
    const errorDiv = document.createElement('div');
    errorDiv.style = "padding:30px;background:#180505;color:#ff6b6b;font-family:monospace;border:2px solid red;margin:20px;border-radius:10px;";
    errorDiv.innerHTML = `<h2 style="color:red">⚠️ Script Loading Error</h2><pre>${event.error?.stack || event.message || event.error}</pre>`;
    document.body.prepend(errorDiv);
  }
});

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
} else {
  console.error("No element with id 'root' found!");
}
