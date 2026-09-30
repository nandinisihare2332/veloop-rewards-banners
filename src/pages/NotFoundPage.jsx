import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertCircle, ArrowLeft } from 'lucide-react';
import '../App.css';

const NotFoundPage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="app-container page-transition" style={{ alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
      <div style={{ background: 'rgba(30, 41, 59, 0.5)', width: '100%', maxWidth: '600px', padding: '60px 40px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '20px', borderRadius: '50%', color: '#ef4444', marginBottom: '30px' }}>
          <AlertCircle size={48} />
        </div>
        <h1 style={{ color: '#f8fafc', fontSize: '3rem', marginBottom: '15px' }}>404</h1>
        <h2 style={{ color: '#e2e8f0', marginBottom: '20px' }}>Page Not Found</h2>
        <p style={{ color: '#94a3b8', marginBottom: '40px', lineHeight: '1.6' }}>
          Oops! The page you are looking for doesn't exist or has been moved. Let's get you back to the rewards.
        </p>
        <button 
          onClick={() => navigate('/')}
          style={{ background: 'linear-gradient(90deg, #3b82f6 0%, #6366f1 100%)', color: 'white', border: 'none', padding: '15px 30px', borderRadius: '8px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', transition: 'all 0.3s ease' }}
        >
          <ArrowLeft size={20} /> Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
