// "use client";
// import React, { useState, useEffect } from 'react';
// import { 
//   Shield, 
//   ChevronRight, 
//   Clock, 
//   Globe, 
//   FileText, 
//   Lock, 
//   AlertCircle,
//   ArrowRight
// } from 'lucide-react';

// const PolicyLayout = ({ title, effectiveDate, jurisdiction, children, sections }) => {
//   const [activeSection, setActiveSection] = useState(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveSection(entry.target.id);
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     sections.forEach((section) => {
//       const el = document.getElementById(section.id);
//       if (el) observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, [sections]);

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       const yOffset = -100; 
//       const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
//       window.scrollTo({ top: y, behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50/50 font-[family-name:var(--font-poppins)]">
//       {/* Header Section */}
//       <div className="bg-white border-b border-gray-100 pt-12 pb-16">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
//             <div className="space-y-4">
//               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">
//                 <Shield className="w-4 h-4" /> Legal Document
//               </div>
//               <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
//                 {title}
//               </h1>
//               <div className="flex flex-wrap gap-6 text-sm text-gray-500">
//                 <div className="flex items-center gap-2">
//                   <Clock className="w-4 h-4 text-blue-500" />
//                   <span>Effective Date: <strong>{effectiveDate}</strong></span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Globe className="w-4 h-4 text-emerald-500" />
//                   <span>Jurisdiction: <strong>{jurisdiction}</strong></span>
//                 </div>
//               </div>
//             </div>
//             <div className="hidden lg:block">
//                <div className="p-4 rounded-2xl bg-blue-600/5 border border-blue-600/10 flex items-center gap-4">
//                   <div className="p-3 rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-200">
//                     <FileText className="w-6 h-6" />
//                   </div>
//                   <div className="text-sm">
//                     <p className="font-bold text-gray-900">Official Policy</p>
//                     <p className="text-gray-500">Last updated: Aug 2025</p>
//                   </div>
//                </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 py-12">
//         <div className="grid lg:grid-cols-[280px_1fr] gap-16">
//           {/* Sidebar Navigation */}
//           <aside className="hidden lg:block sticky top-24 self-start h-[calc(100vh-120px)] overflow-y-auto pr-4 scrollbar-hide">
//             <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Contents</p>
//             <nav className="space-y-1">
//               {sections.map((section) => (
//                 <button
//                   key={section.id}
//                   onClick={() => scrollToSection(section.id)}
//                   className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between group ${
//                     activeSection === section.id 
//                     ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
//                     : 'text-gray-500 hover:bg-white hover:text-blue-600'
//                   }`}
//                 >
//                   <span className="truncate">{section.title}</span>
//                   <ChevronRight className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${activeSection === section.id ? 'opacity-100' : ''}`} />
//                 </button>
//               ))}
//             </nav>
//           </aside>

//           {/* Main Content */}
//           <main className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100">
//             <div className="prose prose-blue max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-strong:text-gray-900">
//               {children}
//             </div>

//             {/* Bottom Footer Info */}
//             <div className="mt-20 pt-12 border-t border-gray-100">
//                <div className="grid md:grid-cols-2 gap-8 items-center">
//                   <div className="space-y-2">
//                     <h4 className="text-xl font-bold text-gray-900">Still have questions?</h4>
//                     <p className="text-gray-500">Our legal team is here to help you understand our policies.</p>
//                   </div>
//                   <div className="flex justify-md-end">
//                     <a href="mailto:support@safemarg.com" className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all group">
//                       Contact Legal Support <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                     </a>
//                   </div>
//                </div>
//             </div>
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PolicyLayout;

"use client";
import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  ChevronRight, 
  Clock, 
  Globe, 
  FileText, 
  Lock, 
  AlertCircle,
  ArrowRight
} from 'lucide-react';

const PolicyLayout = ({ title, effectiveDate, jurisdiction, children, sections }) => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50 font-[family-name:var(--font-poppins)]">
      {/* Header Section - Compact */}
      <div className="bg-white border-b border-gray-100 pt-8 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">
                <Shield className="w-4 h-4" /> Legal Document
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
                {title}
              </h1>
              <div className="flex flex-wrap gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span>Effective Date: <strong>{effectiveDate}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-emerald-500" />
                  <span>Jurisdiction: <strong>{jurisdiction}</strong></span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
               <div className="p-4 rounded-2xl bg-blue-600/5 border border-blue-600/10 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-200">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="text-sm">
                    <p className="font-bold text-gray-900">Official Policy</p>
                    <p className="text-gray-500">Last updated: Aug 2025</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 md:py-10">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 md:gap-16">
          {/* Sidebar Navigation */}
          <aside className="hidden lg:block sticky top-24 self-start h-[calc(100vh-120px)] overflow-y-auto pr-4 scrollbar-hide">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Contents</p>
            <nav className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between group ${
                    activeSection === section.id 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                    : 'text-gray-500 hover:bg-white hover:text-blue-600'
                  }`}
                >
                  <span className="truncate">{section.title}</span>
                  <ChevronRight className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${activeSection === section.id ? 'opacity-100' : ''}`} />
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content - Compact padding */}
          <main className="bg-white rounded-[2.5rem] p-6 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100">
            <div className="prose prose-blue max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-strong:text-gray-900">
              {children}
            </div>

            {/* Bottom Footer Info - Reduced margin */}
            <div className="mt-12 pt-8 border-t border-gray-100">
               <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-gray-900">Still have questions?</h4>
                    <p className="text-gray-500">Our legal team is here to help you understand our policies.</p>
                  </div>
                  <div className="flex justify-md-end">
                    <a href="mailto:support@safemarg.com" className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all group">
                      Contact Legal Support <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
               </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PolicyLayout;
