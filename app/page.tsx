'use client';

import { useEffect, useRef } from 'react';

export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const glow = glowRef.current;

    const moveCursor = (e: MouseEvent) => {
      if (cursor && glow) {
        // Use transform with translate3d for GPU acceleration
        cursor.style.transform = `translate3d(${e.clientX - 6}px, ${e.clientY - 6}px, 0)`;
        glow.style.transform = `translate3d(${e.clientX - 150}px, ${e.clientY - 150}px, 0)`;
      }
    };

    window.addEventListener('mousemove', moveCursor, { passive: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: 'white', fontFamily: 'system-ui, -apple-system, sans-serif', position: 'relative', overflow: 'hidden' }}>
      {/* Custom Cursor */}
      <div ref={cursorRef} className="custom-cursor"></div>
      <div ref={glowRef} className="cursor-glow"></div>
      
      {/* Animated Gradient Background */}
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 0,
        overflow: 'hidden'
      }}>
        <style>{`
          @keyframes blob1 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            25% { transform: translate(100px, -50px) scale(1.1); }
            50% { transform: translate(-50px, 100px) scale(0.9); }
            75% { transform: translate(50px, 50px) scale(1.05); }
          }
          @keyframes blob2 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(-100px, 100px) scale(1.2); }
            66% { transform: translate(100px, -100px) scale(0.8); }
          }
          @keyframes blob3 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            20% { transform: translate(150px, 100px) scale(1.1); }
            40% { transform: translate(-100px, -50px) scale(0.9); }
            60% { transform: translate(50px, 150px) scale(1.15); }
            80% { transform: translate(-150px, 50px) scale(0.95); }
          }
          @keyframes blob4 {
            0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
            25% { transform: translate(-80px, -80px) scale(1.1) rotate(90deg); }
            50% { transform: translate(80px, 80px) scale(0.9) rotate(180deg); }
            75% { transform: translate(-60px, 100px) scale(1.05) rotate(270deg); }
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
          }
          .animate-scaleIn {
            animation: scaleIn 0.6s ease-out forwards;
          }
          .animate-slideInLeft {
            animation: slideInLeft 0.7s ease-out forwards;
          }
          .animate-slideInRight {
            animation: slideInRight 0.7s ease-out forwards;
          }
          .stagger-1 { animation-delay: 0.1s; opacity: 0; }
          .stagger-2 { animation-delay: 0.2s; opacity: 0; }
          .stagger-3 { animation-delay: 0.3s; opacity: 0; }
          .stagger-4 { animation-delay: 0.4s; opacity: 0; }
          .stagger-5 { animation-delay: 0.5s; opacity: 0; }
          .stagger-6 { animation-delay: 0.6s; opacity: 0; }
          .stagger-7 { animation-delay: 0.7s; opacity: 0; }
          .stagger-8 { animation-delay: 0.8s; opacity: 0; }
        `}</style>
        
        {/* Grainy Texture Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          opacity: 0.03,
          pointerEvents: 'none',
          mixBlendMode: 'overlay'
        }} />
        
        {/* Blob 1 - Orange */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '20%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.3) 0%, rgba(249, 115, 22, 0) 70%)',
          borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
          filter: 'blur(40px)',
          animation: 'blob1 20s ease-in-out infinite',
          opacity: 0.6
        }} />
        
        {/* Blob 2 - Purple */}
        <div style={{
          position: 'absolute',
          top: '60%',
          right: '20%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, rgba(168, 85, 247, 0) 70%)',
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          filter: 'blur(40px)',
          animation: 'blob2 25s ease-in-out infinite',
          opacity: 0.5
        }} />
        
        {/* Blob 3 - Blue */}
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '10%',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0) 70%)',
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          filter: 'blur(40px)',
          animation: 'blob3 30s ease-in-out infinite',
          opacity: 0.4
        }} />
        
        {/* Blob 4 - Pink/Red */}
        <div style={{
          position: 'absolute',
          top: '40%',
          right: '40%',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, rgba(236, 72, 153, 0) 70%)',
          borderRadius: '70% 30% 50% 50% / 30% 30% 70% 70%',
          filter: 'blur(40px)',
          animation: 'blob4 22s ease-in-out infinite',
          opacity: 0.5
        }} />
        
        {/* Overlay gradient for depth */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(10, 10, 10, 0.4) 100%)',
          pointerEvents: 'none'
        }} />
      </div>

      {/* Content wrapper with relative positioning */}
      <div style={{ position: 'relative', zIndex: 1 }}>
      {/* Hero Section */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 24px' }}>
        <div style={{ maxWidth: '896px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ marginBottom: '24px' }} className="animate-fadeIn">
            <span style={{ color: '#9ca3af', fontSize: '14px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              A Powerful AI Assistant
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', fontWeight: 'bold', marginBottom: '24px', lineHeight: '1.1' }} className="animate-fadeInUp stagger-1">
            TOA <span style={{ color: '#f97316' }}>Personal Copilot</span>
          </h1>
          <p style={{ color: '#9ca3af', fontSize: '1.25rem', maxWidth: '768px', margin: '0 auto 48px auto', lineHeight: '1.75' }} className="animate-fadeInUp stagger-2">
            An AI-powered chatbot with state-of-the-art document retrieval, 
            featuring hybrid search (BM25 + Vector), cross-encoder reranking, and 
            hallucination detection. Built with FastAPI, Next.js, and Ollama.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }} className="animate-fadeInUp stagger-3">
            <button style={{ background: '#f97316', color: 'white', padding: '12px 32px', borderRadius: '8px', fontWeight: '600', border: 'none', cursor: 'pointer', fontSize: '16px', transition: 'transform 0.2s, box-shadow 0.2s' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(249, 115, 22, 0.3)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
              Get Started Now
            </button>
            <button style={{ border: '1px solid #374151', background: 'transparent', color: 'white', padding: '12px 32px', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', fontSize: '16px', transition: 'all 0.2s' }} onMouseOver={(e) => { e.currentTarget.style.borderColor = '#f97316'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseOut={(e) => { e.currentTarget.style.borderColor = '#374151'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              Explore Features →
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '80px 24px', background: '#0f0f0f' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '16px', textAlign: 'center' }} className="animate-fadeInUp">Features</h2>
          <p style={{ color: '#9ca3af', fontSize: '1.125rem', textAlign: 'center', marginBottom: '64px' }} className="animate-fadeInUp stagger-1">State-of-the-art AI capabilities in one powerful copilot</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {[
              { icon: "💬", title: "Conversational AI", description: "Chat with local LLM using Ollama llama3.2:3b model" },
              { icon: "📄", title: "Document Upload", description: "Process PDFs and images with advanced OCR capabilities" },
              { icon: "🔍", title: "Hybrid Retrieval", description: "BM25 keyword + Vector semantic search with RRF fusion" },
              { icon: "🎯", title: "Cross-Encoder Reranking", description: "SOTA relevance scoring for top search results" },
              { icon: "✅", title: "Hallucination Detection", description: "Token overlap analysis for response grounding" },
              { icon: "📚", title: "Source Attribution", description: "Page-level provenance tracking with citations" },
              { icon: "💾", title: "PostgreSQL Storage", description: "Persistent conversations with full history tracking" },
              { icon: "🎙", title: "Voice Input", description: "Speech-to-text with Whisper integration (optional)" }
            ].map((feature, index) => (
              <div key={index} style={{ background: '#151515', border: '1px solid #1f2937', borderRadius: '8px', padding: '24px', transition: 'all 0.3s' }} className={`animate-scaleIn stagger-${(index % 8) + 1}`} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.borderColor = '#f97316'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(249, 115, 22, 0.1)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#1f2937'; e.currentTarget.style.boxShadow = 'none'; }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{feature.icon}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '8px' }}>{feature.title}</h3>
                <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '16px', textAlign: 'center' }} className="animate-fadeInUp">Tech Stack</h2>
          <p style={{ color: '#9ca3af', fontSize: '1.125rem', textAlign: 'center', marginBottom: '64px' }} className="animate-fadeInUp stagger-1">Built with modern, powerful technologies and frameworks</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '48px' }}>
            <div style={{ background: '#0f0f0f', border: '1px solid #1f2937', borderRadius: '8px', padding: '32px', transition: 'all 0.3s' }} className="animate-slideInLeft" onMouseOver={(e) => { e.currentTarget.style.borderColor = '#f97316'; e.currentTarget.style.transform = 'scale(1.02)'; }} onMouseOut={(e) => { e.currentTarget.style.borderColor = '#1f2937'; e.currentTarget.style.transform = 'scale(1)'; }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <div style={{ fontSize: '2rem' }}>🖥</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Backend</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  "FastAPI - Python web framework",
                  "Ollama - Local LLM inference (llama3.2:3b)",
                  "LangChain - LLM orchestration",
                  "ChromaDB - Vector database",
                  "PostgreSQL - Conversation storage",
                  "SQLAlchemy - ORM",
                  "Rank-BM25 - Keyword retrieval",
                  "Sentence-Transformers - Cross-encoder"
                ].map((item, i) => (
                  <li key={i} style={{ color: '#9ca3af', marginBottom: '12px', display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#f97316' }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: '#0f0f0f', border: '1px solid #1f2937', borderRadius: '8px', padding: '32px', transition: 'all 0.3s' }} className="animate-slideInRight" onMouseOver={(e) => { e.currentTarget.style.borderColor = '#f97316'; e.currentTarget.style.transform = 'scale(1.02)'; }} onMouseOut={(e) => { e.currentTarget.style.borderColor = '#1f2937'; e.currentTarget.style.transform = 'scale(1)'; }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <div style={{ fontSize: '2rem' }}>🎨</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Frontend</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  "Next.js 16 - React framework",
                  "TypeScript - Type safety",
                  "Tailwind CSS - Styling",
                  "React 19 - UI components"
                ].map((item, i) => (
                  <li key={i} style={{ color: '#9ca3af', marginBottom: '12px', display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#f97316' }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section style={{ padding: '80px 24px', background: '#0f0f0f' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '16px', textAlign: 'center' }}>How It Works</h2>
          <p style={{ color: '#9ca3af', fontSize: '1.125rem', textAlign: 'center', marginBottom: '64px' }}>State-of-the-art retrieval pipeline</p>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {[
              { step: "01", title: "User Sends Message", description: "User types question → Frontend sends to /chat endpoint" },
              { step: "02", title: "Document Upload", description: "PDFs/images processed with OCR → Text extracted and indexed" },
              { step: "03", title: "Hybrid Retrieval", description: "BM25 + Vector search → Combined using RRF" },
              { step: "04", title: "Context Building", description: "Retrieves messages → Extracts chunks → Formats context" },
              { step: "05", title: "LLM Generation", description: "Ollama processes with context → Generates response" },
              { step: "06", title: "Hallucination Detection", description: "Token overlap analysis → Confidence scoring" },
              { step: "07", title: "Response Delivery", description: "Saves to PostgreSQL → Returns with sources" }
            ].map((item, index) => (
              <div key={index} style={{ display: 'flex', gap: '24px', marginBottom: '24px', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', minWidth: '48px', borderRadius: '50%', background: '#f97316', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                  {item.step}
                </div>
                <div style={{ background: '#151515', border: '1px solid #1f2937', borderRadius: '8px', padding: '24px', flex: 1 }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ color: '#9ca3af', margin: 0 }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '16px', textAlign: 'center' }}>Performance</h2>
          <p style={{ color: '#9ca3af', fontSize: '1.125rem', textAlign: 'center', marginBottom: '64px' }}>Optimized for speed, accuracy, and reliability</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
            {[
              { icon: "🎯", value: "~90%", label: "Retrieval Accuracy", subtitle: "Hybrid + reranking" },
              { icon: "📊", value: "2048", label: "Context Window", subtitle: "Tokens" },
              { icon: "✅", value: "85%", label: "Hallucination Detection", subtitle: "Confidence threshold" }
            ].map((stat, index) => (
              <div key={index} style={{ background: '#0f0f0f', border: '1px solid #1f2937', borderRadius: '8px', padding: '32px', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{stat.icon}</div>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#f97316', marginBottom: '8px' }}>{stat.value}</div>
                <div style={{ fontWeight: '600', marginBottom: '4px' }}>{stat.label}</div>
                <div style={{ color: '#9ca3af', fontSize: '0.875rem' }}>{stat.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '48px 24px', borderTop: '1px solid #1f2937' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#9ca3af', margin: 0 }}>Built with ❤️ using FastAPI, Next.js, and Ollama</p>
          <p style={{ color: '#6b7280', fontSize: '0.875rem', marginTop: '8px', margin: '8px 0 0 0' }}>© 2024 TOA Personal Copilot. All rights reserved.</p>
        </div>
      </footer>
      </div>
    </div>
  );
}
