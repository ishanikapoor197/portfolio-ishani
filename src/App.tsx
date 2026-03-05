// import React, { useState, useEffect } from 'react';
// import { AnimatePresence } from 'motion/react';
// import { AnimatedBackground } from './components/AnimatedBackground';
// import { SplashScreen } from './components/SplashScreen';
// import { Hero } from './components/Hero';
// import { Experience } from './components/Experience';
// import { Skills } from './components/Skills';
// import { Education } from './components/Education';
// import { Footer } from './components/Footer';
// import { ResumeData } from './types';
// import { PrintableResume } from './components/PrintableResume';

// export default function App() {
//   const [loading, setLoading] = useState(true);
//   const [resumeData, setResumeData] = useState<ResumeData | null>(null);
//   const [view, setView] = useState<'main' | 'resume'>('main');

//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     if (params.get('view') === 'resume') {
//       setView('resume');
//     }
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('/api/resume');
//         if (!response.ok) throw new Error('Failed to fetch resume data');
//         const data = await response.json();
//         setResumeData(data);
//       } catch (error) {
//         console.error('Error fetching resume data:', error);
//       }
//     };
//     fetchData();
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//       const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//       const scrolled = (winScroll / height) * 100;
//       const progressElement = document.getElementById('scroll-progress');
//       if (progressElement) {
//         progressElement.style.width = scrolled + '%';
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-emerald-500/30 selection:text-emerald-400">
//       {view === 'resume' && resumeData ? (
//         <PrintableResume data={resumeData} />
//       ) : (
//         <AnimatePresence mode="wait">
//           {loading ? (
//             <SplashScreen key="splash" onComplete={() => setLoading(false)} />
//           ) : (
//             <main key="main" className="relative">
//               <AnimatedBackground />
              
//               {/* Scroll Progress Indicator */}
//               <div className="fixed top-0 left-0 w-full h-1 z-50 pointer-events-none">
//                 <div className="h-full bg-emerald-500/50 origin-left" id="scroll-progress" />
//               </div>

//               <Hero basics={resumeData?.basics} />
              
//               <div className="relative z-10">
//                 <Experience experience={resumeData?.experience} />
//                 <Skills skills={resumeData?.skills} />
//                 <Education education={resumeData?.education} />
//                 <Footer />
//               </div>
//             </main>
//           )}
//         </AnimatePresence>
//       )}
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { SplashScreen } from './components/SplashScreen';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Footer } from './components/Footer';
import { ResumeData } from './types';
import { PrintableResume } from './components/PrintableResume';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [view, setView] = useState<'main' | 'resume'>('main');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('view') === 'resume') {
      setView('resume');
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/resume');
        if (!response.ok) throw new Error('Failed to fetch resume data');
        const data = await response.json();
        setResumeData(data);
      } catch (error) {
        console.error('Error fetching resume data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const progressElement = document.getElementById('scroll-progress');
      if (progressElement) {
        progressElement.style.width = scrolled + '%';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-emerald-500/30 selection:text-emerald-400">
      {view === 'resume' && resumeData ? (
        <PrintableResume data={resumeData} />
      ) : (
        <AnimatePresence mode="wait">
          {loading ? (
            <SplashScreen key="splash" onComplete={() => setLoading(false)} />
          ) : (
            <main key="main" className="relative">
              <AnimatedBackground />
              
              {/* Scroll Progress Indicator */}
              <div className="fixed top-0 left-0 w-full h-1 z-50 pointer-events-none">
                <div className="h-full bg-emerald-500/50 origin-left" id="scroll-progress" />
              </div>

              <Hero basics={resumeData?.basics} />
              
              <div className="relative z-10">
                <Experience experience={resumeData?.experience} />
                <Skills skills={resumeData?.skills} />
                <Projects projects={resumeData?.projects} />
                <Education education={resumeData?.education} />
                <Footer />
              </div>
            </main>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}
