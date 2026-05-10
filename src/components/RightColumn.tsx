export default function RightColumn() {
  return (
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
              desc: "A visionary Technical Lead/Architect with expertise in Micro Frontend architecture, designing and implementing modular, independently deployable frontend systems that scale across large enterprise products. Highly skilled in React.js, JavaScript, CSS, SASS, and HTML5, delivering modern, responsive, and performance-optimized user interfaces.\n\nExperienced in Node.js for building efficient backend services and APIs that seamlessly integrate with frontend ecosystems. Brings strong capability in Agentic AI Development, leveraging intelligent automation to enhance product functionality and user experience.\n\nA strategic thinker with deep knowledge in Technical Architecture, Architecture Management, and Architectural Design — translating complex business requirements into scalable, maintainable, and future-proof system designs. Adept at leading engineering teams, establishing architectural standards, and driving technical decisions that align with long-term product vision.",
            },
            {
              title: "Senior Technical Lead",
              years: "2021 - 2022",
              company: "Publicis Sapient",
              desc: "A results-driven Technology Lead with deep expertise in modern frontend and full-stack development. Proficient in CSS and JavaScript to deliver responsive, accessible, and visually polished user interfaces. Experienced in building scalable applications using React.js and managing complex application state with Redux.js, ensuring seamless user experiences across large-scale platforms.\n\nSkilled in StencilJS for developing reusable, framework-agnostic web components that drive design system consistency across products. Hands-on with MongoDB for designing and optimizing NoSQL data models that support high-performance, data-driven applications.\n\nBrings a strong foundation in Software Development best practices — including agile methodologies, code reviews, CI/CD pipelines, and mentoring cross-functional engineering teams. Adept at translating business requirements into scalable technical solutions while fostering a culture of quality, collaboration, and continuous improvement.",
            },
            {
              title: "Technical Lead",
              years: "2015 - 2021",
              company: "Cognizant Technology Solutions",
              desc: "An experienced Technology Lead with a strong command of both modern and foundational web technologies. Proficient in React.js and AngularJS for building dynamic, component-driven single-page applications, with a solid grasp of CSS and JavaScript to craft intuitive, responsive user interfaces across devices and browsers.\n\nBrings extensive experience in Software Development lifecycle management — from requirements gathering and architecture design to deployment and post-launch support — ensuring delivery of robust, maintainable codebases aligned with business goals.\n\nHighly skilled in Content Management Systems (CMS), enabling teams to manage and publish digital content efficiently through platforms that are scalable, editor-friendly, and easily integrated with modern frontends. Complemented by strong backend knowledge in MySQL, including database schema design, query optimization, and relational data modeling to support high-availability applications.\n\nA collaborative leader who bridges the gap between design, development, and stakeholder needs — driving technical decisions that balance innovation with reliability.",
            },
          ].map((job, idx) => (
            <div key={idx} className="relative">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold font-display text-base uppercase">{job.title}</h3>
                <span className="text-sm text-primary font-bold italic">{job.years}</span>
              </div>
              <p className="text-sm text-primary italic mb-2">{job.company}</p>
              <div className="text-sm leading-tight text-muted">
                {job.desc.split('\n\n').map((para, idx) => (
                  <p key={idx} className={idx > 0 ? 'mt-3' : ''}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center bg-charcoal text-white p-2.5 mb-4">
          <span className="material-icons text-primary mr-2 text-2xl">download</span>
          <h2 className="text-2xl font-bold font-display tracking-wider">RESUME</h2>
        </div>
        <div className="text-center">
          <p className="text-sm text-muted mb-4">
            To know more about my projects and detailed work experience, please download my resume.
          </p>
          <a
            href="/resume/Rajmohan_S_UI_FrontEnd_Architect_Agentic_AI_16yrs.docx"
            download
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 hover:bg-primary/80 transition-colors font-bold uppercase tracking-wider"
          >
            <span className="material-icons">description</span>
            Download My Resume
          </a>
        </div>
      </section>
    </div>
  );
}