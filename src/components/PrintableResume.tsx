// import React from 'react';
// import { ResumeData } from '../types';

// interface PrintableResumeProps {
//   data: ResumeData;
// }

// export const PrintableResume: React.FC<PrintableResumeProps> = ({ data }) => {
//   return (
//     <div className="bg-white text-black p-10 max-w-[800px] mx-auto font-serif shadow-lg print:shadow-none print:p-0">
//       <header className="border-b-2 border-black pb-4 mb-6 flex justify-between items-end">
//         <div>
//           <h1 className="text-4xl font-bold uppercase tracking-tight">{data.basics.name}</h1>
//           <p className="text-xl text-gray-700">{data.basics.title}</p>
//         </div>
//         <div className="text-right text-sm">
//           <p>{data.basics.location}</p>
//           <p>{data.basics.email}</p>
//           {data.basics.links.map(link => (
//             <p key={link.label}>{link.url.replace('https://', '')}</p>
//           ))}
//         </div>
//       </header>

//       <section className="mb-6">
//         <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-2">Summary</h2>
//         <p className="text-sm leading-relaxed">{data.basics.summary}</p>
//       </section>

//       <section className="mb-6">
//         <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-2">Experience</h2>
//         {data.experience.map((exp, idx) => (
//           <div key={idx} className="mb-4">
//             <div className="flex justify-between font-bold">
//               <span>{exp.role} | {exp.company}</span>
//               <span>{exp.dates}</span>
//             </div>
//             <p className="text-xs text-gray-600 mb-1 italic">{exp.location} ({exp.duration})</p>
//             <ul className="list-disc list-inside text-sm space-y-1">
//               {exp.bullets.map((bullet, bIdx) => (
//                 <li key={bIdx}>{bullet}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </section>

//       <section className="mb-6">
//         <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-2">Education</h2>
//         {data.education.map((edu, idx) => (
//           <div key={idx} className="mb-2">
//             <div className="flex justify-between font-bold">
//               <span>{edu.institution}</span>
//               <span>{edu.dates}</span>
//             </div>
//             <p className="text-sm">{edu.degree}</p>
//             <p className="text-xs text-gray-600">{edu.details}</p>
//           </div>
//         ))}
//       </section>

//       <section className="mb-6">
//         <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-2">Skills</h2>
//         <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
//           {data.skills.map((skill, idx) => (
//             <span key={idx}><span className="font-bold">{skill.category}:</span> {skill.name}</span>
//           ))}
//         </div>
//       </section>

//       <div className="fixed bottom-8 right-8 flex gap-4 print:hidden">
//         <button 
//           onClick={() => window.location.href = '/'}
//           className="bg-white text-black border border-black px-6 py-3 rounded-full font-bold shadow-xl hover:bg-gray-100 transition-colors"
//         >
//           Back to Portfolio
//         </button>
//         <button 
//           onClick={() => window.print()}
//           className="bg-black text-white px-6 py-3 rounded-full font-bold shadow-xl hover:bg-gray-800 transition-colors"
//         >
//           Print to PDF
//         </button>
//       </div>
//     </div>
//   );
// };
import React from 'react';
import { ResumeData } from '../types';

interface PrintableResumeProps {
  data: ResumeData;
}

export const PrintableResume: React.FC<PrintableResumeProps> = ({ data }) => {
  return (
    <div className="bg-white text-black p-10 max-w-[800px] mx-auto font-serif shadow-lg print:shadow-none print:p-0">
      <header className="border-b-2 border-black pb-4 mb-6 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-bold uppercase tracking-tight">{data.basics.name}</h1>
          <p className="text-xl text-gray-700">{data.basics.title}</p>
        </div>
        <div className="text-right text-sm">
          <p>{data.basics.location}</p>
          <p>{data.basics.email}</p>
          {data.basics.links.map(link => (
            <p key={link.label}>{link.url.replace('https://', '')}</p>
          ))}
        </div>
      </header>

      <section className="mb-6">
        <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-2">Summary</h2>
        <p className="text-sm leading-relaxed">{data.basics.summary}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-2">Experience</h2>
        {data.experience.map((exp, idx) => (
          <div key={idx} className="mb-4">
            <div className="flex justify-between font-bold">
              <span>{exp.role} | {exp.company}</span>
              <span>{exp.dates}</span>
            </div>
            <p className="text-xs text-gray-600 mb-1 italic">{exp.location} ({exp.duration})</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              {exp.bullets.map((bullet, bIdx) => (
                <li key={bIdx}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-2">Projects</h2>
        {data.projects.map((project, idx) => (
          <div key={idx} className="mb-4">
            <div className="flex justify-between font-bold">
              <span>{project.title}</span>
              <span className="text-xs font-normal italic">{project.stack.join(', ')}</span>
            </div>
            <ul className="list-disc list-inside text-sm space-y-1">
              {project.bullets.map((bullet, bIdx) => (
                <li key={bIdx}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-2">Education</h2>
        {data.education.map((edu, idx) => (
          <div key={idx} className="mb-2">
            <div className="flex justify-between font-bold">
              <span>{edu.institution}</span>
              <span>{edu.dates}</span>
            </div>
            <p className="text-sm">{edu.degree}</p>
            <p className="text-xs text-gray-600">{edu.details}</p>
          </div>
        ))}
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-2">Skills</h2>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
          {data.skills.map((skill, idx) => (
            <span key={idx}><span className="font-bold">{skill.category}:</span> {skill.name}</span>
          ))}
        </div>
      </section>

      <div className="fixed bottom-8 right-8 flex gap-4 print:hidden">
        <button 
          onClick={() => window.location.href = '/'}
          className="bg-white text-black border border-black px-6 py-3 rounded-full font-bold shadow-xl hover:bg-gray-100 transition-colors"
        >
          Back to Portfolio
        </button>
        <button 
          onClick={() => window.print()}
          className="bg-black text-white px-6 py-3 rounded-full font-bold shadow-xl hover:bg-gray-800 transition-colors"
        >
          Print to PDF
        </button>
      </div>
    </div>
  );
};
