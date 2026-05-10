import ThemeToggle from "@/components/ThemeToggle";
import MiddleColumn from "@/components/MiddleColumn";
import RightColumn from "@/components/RightColumn";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-background-dark min-h-screen py-10 px-4 transition-colors duration-500">
      <div className="max-w-[1100px] mx-auto bg-background-light shadow-2xl overflow-hidden font-body text-foreground border border-border">
        <header className="bg-primary p-10 flex flex-col md:flex-row items-center justify-between relative">
          <div className="flex-1 text-white text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold font-display leading-tight uppercase">
              RAJMOHAN S
            </h1>
            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4">
              {[
                "FRONTEND TECHNICAL ARCHITECT (MFE)",
                "SCALABLE FRONTEND SYSTEMS",
                "MERN STACK",
                "UX / DEVOPS / BACKEND COLLABORATION",
                "AGENTIC AI DEVELOPMENT",
                "AI ENTHUSIAST"
              ].map((text, i) => (
                <span key={i} className="flex items-center text-xs md:text-sm tracking-widest font-bold uppercase py-1 px-3 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm whitespace-nowrap">
                  {text}
                </span>
              ))}
            </div>
            <div className="h-1 w-64 bg-white mt-4 hidden md:block"></div>
          </div>
          <div className="flex-shrink-0 my-8 md:my-0 px-8">
            <div className="w-48 h-56 border-8 border-white bg-gray-200 overflow-hidden shadow-lg relative">
              <Image
                alt="Rajmohan S"
                className="object-cover"
                fill
                src="/images/linked-in-professional-image.jpg"
              />
            </div>
          </div>
          <div className="flex-1 w-full md:w-auto space-y-2">
            {[
              { icon: "phone", value: "+ 91 9842158964" },
              { icon: "email", value: "RAJMOHANCODER@GMAIL.COM" },
              { icon: "group_work", value: "rajmohan14@hotmail.com" },
              { icon: "work", value: "Available for Remote Work" },
              { icon: "location_on", value: "CHENNAI, TAMILNADU, INDIA" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center bg-charcoal text-white p-2.5">
                <div className="w-10 flex justify-center border-r border-gray-600 mr-3">
                  <span className="material-icons text-primary text-base">{item.icon}</span>
                </div>
                <span className="text-sm">{item.value}</span>
              </div>
            ))}
          </div>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10">
          {/* Left Column */}
          <div className="space-y-10">
            <section>
              <div className="flex items-center bg-charcoal text-white p-2.5 mb-4">
                <span className="material-icons text-primary mr-2 text-2xl">person</span>
                <h2 className="text-2xl font-bold font-display tracking-wider">ABOUT ME</h2>
              </div>
              <div className="text-base leading-relaxed text-muted">
                <p>
                  UI Technical Architect with over 16+ years of industry experience specializing in scalable, enterprise-grade frontend development, with a strong focus on Micro Frontend (MFE) architecture.
                </p>

                <p className="mt-3">
                  Beyond coding, I bring strong team leadership, agile delivery, and architectural decision-making skills — having working with cross-functional teams and consistently delivered quality products on time.
                </p>

                <p className="mt-3">
                  I'm a continuous learner, always staying current with emerging technologies, and I'm excited about opportunities where I can leverage my architecture and AI expertise to drive real business value.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center bg-charcoal text-white p-2.5 mb-4">
                <span className="material-icons text-primary mr-2 text-2xl">school</span>
                <h2 className="text-2xl font-bold font-display tracking-wider">EDUCATION</h2>
              </div>
              <div className="space-y-4">
                {[
                  {
                    school: "Anna University",
                    degree: "Bachelor of Computer Science and Engineering",
                    years: "2002 - 2006",
                    desc: "Lorem ipsum is simply dummy text of the printing.",
                  }
                 ].map((edu, idx) => (
                   <div key={idx}>
                     <h3 className="font-bold font-display text-base uppercase">{edu.school}</h3>
                     <br />
                     <p className="text-sm italic text-primary font-bold">{edu.degree}</p>
                     <p className="text-sm text-primary mb-1">{edu.years}</p>
                     {/* <p className="text-xs leading-tight text-gray-500">{edu.desc}</p> */}
                   </div>
                 ))}
               </div>
             </section>

             <section>
               <div className="flex items-center bg-charcoal text-white p-2.5 mb-4">
                 <span className="material-icons text-primary mr-2 text-2xl">emoji_events</span>
                 <h2 className="text-2xl font-bold font-display tracking-wider">ACCOLADES</h2>
               </div>
               <div className="space-y-3 text-sm text-muted">
                 <p className="flex items-start">
                   <span className="text-primary mr-2 mt-0.5"><span className="material-icons text-lg">star</span></span>
                   <span>Received <strong>Star of the Month</strong> award for excellent performance.</span>
                 </p>
                 <p className="flex items-start">
                   <span className="text-primary mr-2 mt-0.5"><span className="material-icons text-lg">workspace_premium</span></span>
                   <span>Received <strong>Exceptional performance rating</strong> in recognition of continuous and outstanding contributions delivered consistently across multiple projects.</span>
                 </p>
                 <p className="flex items-start">
                   <span className="text-primary mr-2 mt-0.5"><span className="material-icons text-lg">thumb_up</span></span>
                   <span>Received <strong>Pat on the Back Award</strong>, in recognition of making outstanding contribution for successful demonstration & delivery of Apple project at critical times.</span>
                 </p>
               </div>
             </section>

             <section>
               <div className="flex items-center bg-charcoal text-white p-2.5 mb-4">
                 <span className="material-icons text-primary mr-2 text-2xl">share</span>
                 <h2 className="text-2xl font-bold font-display tracking-wider">NETWORKS</h2>
               </div>
              <div className="flex space-x-2">
                <a
                  href="https://www.linkedin.com/in/rajmohans/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary flex items-center justify-center text-white cursor-pointer hover:bg-primary/80 transition-colors"
                >
                  <span className="text-lg font-bold italic">in</span>
                </a>
                <a
                  href="https://github.com/rajmohancoder/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary flex items-center justify-center text-white cursor-pointer hover:bg-primary/80 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </section>
          </div>

          {/* Middle Column */}
          <MiddleColumn />

          {/* Right Column */}
          <RightColumn />
        </main>

        <Footer />
      </div>
      <ThemeToggle />
    </div>
  );
}
