import ThemeToggle from "@/components/ThemeToggle";
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
            <p className="text-xl md:text-2xl mt-2 tracking-widest italic font-light opacity-90">
              UI ARCHITECT (MFE) | LEAD MERN STACK | UX/DEVOPS COLLABORATION | AGENTIC AI DEVELOPMENT | AI ENTHUSIAST | TECHNOPHILE
            </p>
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
              { icon: "phone", label: "PHONE:", value: "+ 91 9842158964" },
              { icon: "email", label: "EMAIL:", value: "RAJMOHANCODER@GMAIL.COM" },
              // { icon: "language", label: "WEBSITE:", value: "WWW.JTHOMASON-DESIGN.COM" },
              { icon: "location_on", label: "LOCATION:", value: "CHENNAI, TAMILNADU, INDIA" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center bg-charcoal text-white p-2.5">
                <div className="w-10 flex justify-center border-r border-gray-600 mr-3">
                  <span className="material-icons text-primary text-base">{item.icon}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold tracking-tighter opacity-70 leading-none mb-0.5">
                    {item.label}
                  </span>
                  <span className="text-sm">{item.value}</span>
                </div>
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
                  <strong>Technophile and AI enthusiast</strong> with 16+ years of overall industry experience, currently serving as a Senior Technical Architect and MERN Stack Lead Developer. Specialized in Micro Frontend (MFE) architecture, Modern JavaScript (ES6+), React, Next.js, and Agentic AI development using MCP and GitHub Copilot.
                </p>
                <p className="mt-3">
                  Track record of leading cross-functional teams and delivering enterprise-grade solutions for Apple, Ford, USBANK, and EY across Banking, Automotive, and Technology consulting domains. Deeply passionate about emerging technologies, open-source, and building innovative products that create real business value.
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
                <span className="material-icons text-primary mr-2 text-2xl">share</span>
                <h2 className="text-2xl font-bold font-display tracking-wider">SOCIAL NETWORK</h2>
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
          <div className="space-y-10">
            <section>
              <div className="flex items-center bg-charcoal text-white p-2.5 mb-4">
                <span className="material-icons text-primary mr-2 text-2xl">pie_chart</span>
                <h2 className="text-2xl font-bold font-display tracking-wider">SKILLS SUMMARY</h2>
              </div>
              <div className="space-y-4 text-sm">
                <div>
                  <h3 className="text-xs font-bold uppercase text-primary mb-2">APPLICATION DEVELOPMENT</h3>
                  <div className="text-muted leading-relaxed">
                    HTML5, SASS, Modern JavaScript (ES6+) / TypeScript, React / Next.js, Node.js / Express.js, REST API, Azure Cloud Services, PostgreSQL / MongoDB
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase text-primary mb-2">VERSION CONTROL / AUTOMATION / BUNDLER</h3>
                  <div className="text-muted leading-relaxed">
                    Git / GitHub, CI / CD Pipeline, Webpack, Micro Frontend, Vite
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase text-primary mb-2">AI & EMERGING TECHNOLOGIES</h3>
                  <div className="text-muted leading-relaxed">
                    Agentic AI Development, GitHub Copilot / Factory AI, Model Context Protocol (MCP), Azure AI Foundry, Google Antigravity / Stitch
                  </div>
                </div>
              </div>
            </section>

            {/* <section>
              <div className="flex items-center bg-charcoal text-white p-2.5 mb-4">
                <span className="material-icons text-primary mr-2 text-2xl">people</span>
                <h2 className="text-2xl font-bold font-display tracking-wider">REFERENCES</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    name: "David P. Cleveland",
                    title: "Creative Agency / New York",
                    addr1: "2900 Waterline Lane Alarogordo,",
                    addr2: "NM 88310",
                    phone: "+1-505-470-1604",
                    email: "www.yourwebsite.com",
                  },
                  {
                    name: "Anthony M. Kim",
                    title: "Creative Agency / New York",
                    addr1: "2684 Pickstone Street Norfolk,",
                    addr2: "VA 23504",
                    phone: "+1-757-317-6872",
                    email: "www.yourwebsite.com",
                  },
                ].map((ref, idx) => (
                  <div key={idx} className="text-xs">
                    <h3 className="font-bold font-display text-sm uppercase mb-1">{ref.name}</h3>
                    <p className="text-primary italic font-bold mb-1">{ref.title}</p>
                    <p className="text-gray-500">{ref.addr1}</p>
                    <p className="text-gray-500 mb-1">{ref.addr2}</p>
                    <p className="text-gray-600">Telephone: {ref.phone}</p>
                    <p className="text-gray-600">Email: {ref.email}</p>
                  </div>
                ))}
              </div>
            </section> */}

            <section>
              <div className="flex items-center bg-charcoal text-white p-2.5 mb-4">
                <span className="material-icons text-primary mr-2 text-2xl">emoji_events</span>
                <h2 className="text-2xl font-bold font-display tracking-wider">ACCOLADES</h2>
              </div>
              <div className="space-y-3 text-sm text-muted">
                <p className="flex items-start">
                  <span className="text-primary mr-2">🡺</span>
                  <span>Received <strong>Star of the Month</strong> award for excellent performance.</span>
                </p>
                <p className="flex items-start">
                  <span className="text-primary mr-2">🡺</span>
                  <span>Received <strong>Exceptional performance rating</strong> in recognition of continuous and outstanding contributions delivered consistently across multiple projects.</span>
                </p>
                <p className="flex items-start">
                  <span className="text-primary mr-2">🡺</span>
                  <span>Received <strong>Pat on the Back Award</strong>, in recognition of making outstanding contribution for successful demonstration & delivery of Apple project at critical times.</span>
                </p>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-10">
            <section>
              <div className="flex items-center bg-charcoal text-white p-2.5 mb-4">
                <span className="material-icons text-primary mr-2 text-2xl">work</span>
                <h2 className="text-2xl font-bold font-display tracking-wider">JOB EXPERIENCE</h2>
              </div>
              <div className="space-y-6">
                {[
                  {
                    title: "Senior Technical Architect",
                    years: "2022 - Present",
                    company: "Hexaware Technologies",
                    desc: "Designs scalable software system architectures that bridge business requirements with technical implementation while establishing technology standards for security and maintainability. Leverages AI-powered development tools like GitHub Copilot, Factory AI, and Claude to drive 30-40% efficiency gains in solution delivery and accelerate complex system prototyping.",
                  },
                  {
                    title: "Senior Technical Lead",
                    years: "2021 - 2022",
                    company: "Publicis Sapient",
                    desc: "Senior Technical Lead working mainly in amazon web services, mongo DB, Web Scraping using puppeteer, React js and Stencil js.",
                  },
                  {
                    title: "Technical Lead",
                    years: "2015 - 2021",
                    company: "Cognizant Technology Solutions",
                    desc: "Served as the Technical lead for a scrum team, driving full-stack development including UI interfaces, Web API controllers, data models, and performance optimization. Ensured code quality through design patterns, dependency injection, code reviews, and Sonar cloud quality gates while conducting accessibility testing with talkback features. Facilitated scrum ceremonies, mentored team members to become self-organized, and acted as the primary liaison between the team and management for technical and functional matters. Collaborated proactively with product owners and specialists to identify risks and deliver solutions on time across every sprint.",
                  },
                ].map((job, idx) => (
                  <div key={idx} className="relative">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold font-display text-base uppercase">{job.title}</h3>
                      <span className="text-sm text-primary font-bold italic">{job.years}</span>
                    </div>
                    <p className="text-sm text-primary italic mb-2">{job.company}</p>
                    <p className="text-sm leading-tight text-muted">
                      {job.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center bg-charcoal text-white p-2.5 mb-4">
                <span className="material-icons text-primary mr-2 text-2xl">download</span>
                <h2 className="text-2xl font-bold font-display tracking-wider">DOWNLOAD RESUME</h2>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted mb-4">
                  To know more about my projects and detailed work experience, please download my resume.
                </p>
                <a
                  href="/resume/Rajmohan_S_UI_Architect_MERN_Agentic_AI_16yrs.docx"
                  download
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 hover:bg-primary/80 transition-colors font-bold uppercase tracking-wider"
                >
                  <span className="material-icons">description</span>
                  Download Resume
                </a>
              </div>
            </section>
          </div>
        </main>

        <footer className="h-10 bg-primary w-full mt-4"></footer>
      </div>
      <ThemeToggle />
    </div>
  );
}
