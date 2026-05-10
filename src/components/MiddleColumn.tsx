export default function MiddleColumn() {
  return (
    <div className="space-y-10">
      <section>
        <div className="flex items-center bg-charcoal text-white p-2.5 mb-4">
          <span className="material-icons text-primary mr-2 text-2xl">pie_chart</span>
          <h2 className="text-2xl font-bold font-display tracking-wider">SKILLS SUMMARY</h2>
        </div>
        <div className="space-y-4 text-sm">
          <div>
            <h3 className="text-base font-bold uppercase text-primary mb-2">Programming & Markup Languages</h3>
            <div className="text-muted leading-relaxed">
              HTML5, SASS, JavaScript (ES6+)
            </div>
          </div>
          <div>
            <h3 className="text-base font-bold uppercase text-primary mb-2">Frontend Frameworks & Libraries</h3>
            <div className="text-muted leading-relaxed">
              React, Next.js, AngularJS, Stencil
            </div>
          </div>
          <div>
            <h3 className="text-base font-bold uppercase text-primary mb-2">Backend & Server-Side</h3>
            <div className="text-muted leading-relaxed">
              Node.js, Express
            </div>
          </div>
          <div>
            <h3 className="text-base font-bold uppercase text-primary mb-2">API & Data Communication</h3>
            <div className="text-muted leading-relaxed">
              REST API, GraphQL
            </div>
          </div>
          <div>
            <h3 className="text-base font-bold uppercase text-primary mb-2">DATABASES</h3>
            <div className="text-muted leading-relaxed">
              MYSQL, PostgreSQL, Mongo DB
            </div>
          </div>
          <div>
            <h3 className="text-base font-bold uppercase text-primary mb-2">Architecture & Patterns</h3>
            <div className="text-muted leading-relaxed">
              JAMstack, Micro Frontend (MFE)
            </div>
          </div>
          <div>
            <h3 className="text-base font-bold uppercase text-primary mb-2">CMS</h3>
            <div className="text-muted leading-relaxed">
              Headless CMS
            </div>
          </div>
          <div>
            <h3 className="text-base font-bold uppercase text-primary mb-2">Authentication & Security</h3>
            <div className="text-muted leading-relaxed">
              MSAL, OAuth, JWT
            </div>
          </div>
          <div>
            <h3 className="text-base font-bold uppercase text-primary mb-2">Build Tools & Utilities</h3>
            <div className="text-muted leading-relaxed">
              Vite Plus
            </div>
          </div>
          <div>
            <h3 className="text-base font-bold uppercase text-primary mb-2">Cloud Platforms, DevOps & Developer Tooling</h3>
            <div className="text-muted leading-relaxed">
              Azure Cloud Services (App Services, Storage Accounts, Application Insights, Static Web Apps and Front Door), Git / GitHub, CI / CD pipeline, GitHub Actions, Zsh terminal, GitHub Codespaces
            </div>
          </div>
          <div>
            <h3 className="text-base font-bold uppercase text-primary mb-2">AI Engineering & Developer Productivity Tools</h3>
            <div className="text-muted leading-relaxed">
              Agentic AI development, GitHub Copilot, Factory AI, Model Context Protocol (MCP), Azure AI Foundry, Google Antigravity, Stitch
            </div>
          </div>
          <div>
            <h3 className="text-base font-bold uppercase text-primary mb-2">Testing Environments</h3>
            <div className="text-muted leading-relaxed">
              Jasmine, Jest
            </div>
          </div>
          <div>
            <h3 className="text-base font-bold uppercase text-primary mb-2">Accessibility Tools</h3>
            <div className="text-muted leading-relaxed">
              NVDA, JAWS
            </div>
          </div>
          <div>
            <h3 className="text-base font-bold uppercase text-primary mb-2">Vulnerability Scan</h3>
            <div className="text-muted leading-relaxed">
              Checkmarx, Mend, Qualys
            </div>
          </div>
          <div>
            <h3 className="text-base font-bold uppercase text-primary mb-2">Load testing Tool</h3>
            <div className="text-muted leading-relaxed">
              Apache JMeter
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}