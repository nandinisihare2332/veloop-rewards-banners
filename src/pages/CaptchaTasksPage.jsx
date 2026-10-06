import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, RefreshCw, Diamond } from 'lucide-react';
import toast from 'react-hot-toast';
import '../App.css';

const generateCaptcha = () => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let result = '';
  for (let i = 0; i < 5; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

const CaptchaTasksPage = () => {
  const navigate = useNavigate();
  const [captchaText, setCaptchaText] = useState('');
  const [input, setInput] = useState('');
  const [gems, setGems] = useState(500);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [solvedToday, setSolvedToday] = useState(12);

  useEffect(() => {
    setCaptchaText(generateCaptcha());
  }, []);

  const refreshCaptcha = () => {
    setCaptchaText(generateCaptcha());
    setInput('');
    setMessage({ text: '', type: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.toUpperCase() === captchaText) {
      setGems(prev => prev + 5);
      setSolvedToday(prev => prev + 1);
      toast.success('Success! +5 Gems added.', { id: 'captcha' });
      setTimeout(() => {
        refreshCaptcha();
      }, 1500);
    } else {
      toast.error('Incorrect captcha. Try again.', { id: 'captcha' });
      setInput('');
    }
  };

  return (
    <div className="app-container page-transition" style={{ alignItems: 'flex-start', gap: '0px' }}>
      <button 
        onClick={() => navigate('/')}
        style={{ background: 'transparent', border: 'none', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', padding: '10px 0', fontSize: '1rem', marginBottom: '20px' }}
      >
        <ArrowLeft size={20} /> Back to Rewards
      </button>

      <div style={{ background: 'rgba(30, 41, 59, 0.5)', width: '100%', padding: '40px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px', alignSelf: 'flex-start' }}>
          <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '15px', borderRadius: '50%', color: '#10b981' }}>
            <CheckCircle size={32} />
          </div>
          <h1 style={{ textAlign: 'left', marginBottom: 0 }}>Captcha Tasks</h1>
        </div>
        
        <div style={{ display: 'flex', gap: '20px', width: '100%', maxWidth: '500px', marginBottom: '40px' }}>
           <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '15px 20px', borderRadius: '12px', flex: 1, border: '1px solid #10b981', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '5px' }}>Solved Today</div>
              <div style={{ color: '#10b981', fontSize: '1.5rem', fontWeight: 'bold' }}>{solvedToday} / 50</div>
           </div>
           <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '15px 20px', borderRadius: '12px', flex: 1, border: '1px solid #8b5cf6', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '5px' }}>Gem Balance</div>
              <div style={{ color: '#8b5cf6', fontSize: '1.5rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px' }}>
                 {gems} <Diamond size={18} />
              </div>
           </div>
        </div>

        <form onSubmit={handleSubmit} style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '40px', borderRadius: '16px', width: '100%', maxWidth: '500px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
          <h3 style={{ color: '#f8fafc', marginBottom: '20px', textAlign: 'center' }}>Solve & Earn</h3>
          
          <div style={{ 
             background: 'linear-gradient(45deg, #1e293b, #0f172a)', 
             padding: '20px', 
             borderRadius: '8px', 
             textAlign: 'center', 
             fontSize: '2rem', 
             letterSpacing: '5px',
             fontWeight: 'bold',
             color: '#cbd5e1',
             fontFamily: 'monospace',
             border: '2px dashed #334155',
             marginBottom: '20px',
             position: 'relative',
             overflow: 'hidden'
          }}>
             {/* Simple noise overlay for aesthetics */}
             <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.15\'/%3E%3C/svg%3E")', pointerEvents: 'none' }}></div>
             {captchaText}
          </div>

          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
             <input 
               type="text" 
               value={input}
               onChange={(e) => setInput(e.target.value)}
               placeholder="Type the characters above"
               style={{ flex: 1, padding: '15px', borderRadius: '8px', border: '1px solid #334155', background: '#0f172a', color: 'white', fontSize: '1.1rem', textTransform: 'uppercase' }}
               autoComplete="off"
               maxLength="5"
             />
             <button type="button" onClick={refreshCaptcha} style={{ padding: '0 20px', background: '#1e293b', border: '1px solid #334155', borderRadius: '8px', color: '#cbd5e1', cursor: 'pointer' }}>
                <RefreshCw size={20} />
             </button>
          </div>

          <button 
             type="submit" 
             disabled={!input}
             style={{
                width: '100%', padding: '15px', borderRadius: '8px', background: !input ? '#475569' : '#10b981', color: 'white', border: 'none', fontSize: '1.1rem', fontWeight: 'bold', cursor: !input ? 'not-allowed' : 'pointer'
             }}
          >
             Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CaptchaTasksPage;
