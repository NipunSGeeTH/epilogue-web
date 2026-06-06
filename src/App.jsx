import React from 'react';

function App() {
  return (
    <>
      <div className="noise-overlay"></div>
      
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full bg-surface/15 backdrop-blur-2xl border-b border-outline-variant/30 shadow-[0_0_20px_rgba(0,230,55,0.1)] flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 z-[100]">
        <div className="font-headline-lg-mobile text-headline-lg-mobile text-primary tracking-tighter">
          EPILOGUE '26
        </div>
        <div className="hidden md:flex gap-8 items-center font-button-text text-button-text">
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#lineup">LINEUP</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#tickets">TICKETS</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#venue">VENUE</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#faq">FAQ</a>
        </div>
        <button className="bg-surface border-2 border-primary text-primary font-button-text text-button-text px-6 py-2 neon-button scale-95 active:scale-90 rounded-none uppercase tracking-wider">
          GET TICKETS
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-section-gap px-margin-mobile md:px-margin-desktop overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Concert background" 
            className="w-full h-full object-cover opacity-40 mix-blend-screen" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvWhpO14CONGh6cqyg3L4nBOGknwwyjoSVf5KtamxjBMqnIO7A3VEwSfpp0gqdfcLFjDcQKQrOLHBpH3bBdGgUyqQA0Ajyh2TlSWuDqPq23FroqHVqFKbVYPBXqIl7bB2aEMpGqlr1WTo6hvRmo_p0U2IGd-S8XJ-Tjd_LGmv_wE2JlZpuc-5kTfCUZTMn7zg_f1ZMK5WQ3cqrUNN2YKddhkyuifYqYjTrygEKRShye7Q4jvjsqlSzCiKpKpX-syCAsOMvB1LnrnQ" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center gap-8">
          <div className="flex flex-col items-center gap-4 animate-fade-in-up">
            <span className="font-label-tech text-label-tech text-primary-fixed-dim bg-primary/10 px-4 py-2 rounded-full uppercase tracking-widest backdrop-blur-md border border-primary/20">
              <span className="inline-block w-2 h-2 rounded-full bg-primary-fixed-dim animate-pulse mr-2"></span>
              A Night Of Musical Brilliance
            </span>
            <h1 className="font-headline-xl text-headline-xl md:text-[120px] md:leading-[110px] text-primary text-glow uppercase tracking-tighter">
              EPILOGUE
              <span className="block text-outline-variant text-[60px] md:text-[80px] leading-none mt-[-20px] tracking-normal">26</span>
            </h1>
          </div>
          <div className="glass-card w-full max-w-2xl p-8 rounded-none mt-12 flex flex-col items-center gap-6 border-t-2 border-primary-fixed-dim">
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface uppercase text-center">
              The Stage Is Set.<br />The Night Awaits.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full py-6 border-y border-outline-variant/30">
              <div className="text-center">
                <div className="font-label-tech text-label-tech text-on-surface-variant uppercase mb-1">Date</div>
                <div className="font-headline-lg text-headline-lg text-primary">JULY 28</div>
              </div>
              <div className="hidden sm:block w-px h-16 bg-outline-variant/50"></div>
              <div className="flex flex-col gap-4 text-left">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                  <span className="font-button-text text-button-text uppercase">LAGAAN</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
                  <span className="font-button-text text-button-text uppercase">6 P.M ONWARDS</span>
                </div>
              </div>
            </div>
            {/* Ticket Pulse */}
            <div className="w-full flex flex-col gap-2 mt-4">
              <div className="flex justify-between font-label-tech text-label-tech">
                <span className="text-primary-fixed-dim">TICKETS SOLD: 85%</span>
                <span className="text-on-surface-variant">AVAILABLE: 15%</span>
              </div>
              <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden relative">
                <div className="absolute top-0 left-0 h-full w-[85%] bg-primary-fixed-dim shadow-[0_0_10px_rgba(0,230,55,0.8)]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface w-full border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop py-12 gap-8 z-10 relative">
        <div className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tighter">
          EPILOGUE '26
        </div>
        <div className="flex flex-wrap justify-center gap-6 font-body-md text-body-md">
          <a className="text-on-surface-variant hover:text-primary transition-colors uppercase" href="#">PRIVACY POLICY</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors uppercase" href="#">TERMS OF SERVICE</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors uppercase" href="#">CONTACT</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors uppercase" href="#">PRESS</a>
        </div>
        <div className="font-label-tech text-label-tech text-on-surface-variant text-center md:text-right">
          © 2026 EPILOGUE EVENTS.<br />ALL RIGHTS RESERVED.
        </div>
      </footer>
    </>
  );
}

export default App;
