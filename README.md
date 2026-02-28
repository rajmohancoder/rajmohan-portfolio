# Personal Portfolio Template

A modern, responsive personal portfolio website template built with Next.js 16, React 19, and Tailwind CSS 4. This template provides a clean and professional design that you can customize to showcase your own skills, experience, and projects.

## About the Template

This portfolio template features:

- **Clean, Professional Design**: A modern dark/light theme with smooth transitions
- **Responsive Layout**: Optimized for all devices from mobile to desktop
- **Interactive Elements**: Theme toggle, smooth scrolling, and animated sections
- **Comprehensive Sections**:
  - Personal introduction and contact information
  - Professional summary and career highlights
  - Technical skills showcase
  - Work experience and achievements
  - Education and certifications
  - Project showcase with detailed descriptions
  - Contact and social media links

## Tech Stack

- **Next.js 16**: React framework with server-side rendering and static site generation
- **React 19**: Modern React with hooks and concurrent features
- **Tailwind CSS 4**: Utility-first CSS framework for rapid development
- **TypeScript**: Type-safe development
- **Material Icons**: Google's Material Design icons

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

You can customize the portfolio by modifying the following files:

1. **Main Content**: Edit [`src/app/page.tsx`](src/app/page.tsx) to update your personal information, skills, experience, and projects
2. **Styles**: Customize [`src/app/globals.css`](src/app/globals.css) to change colors, fonts, and spacing
3. **Theme Toggle**: Modify [`src/components/ThemeToggle.tsx`](src/components/ThemeToggle.tsx) to adjust theme functionality
4. **Static Assets**: Replace images in `public/images/` and update the resume in `public/resume/`
5. **Configuration**: Update `package.json` with your project details

## Project Structure

```
├── public/                # Static assets
│   ├── images/           # Profile and project images (replace with your own)
│   └── resume/           # Professional resume (replace with your own)
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── globals.css   # Global styles with Tailwind
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Main portfolio page (main content)
│   └── components/       # React components
│       └── ThemeToggle.tsx # Dark/light theme toggle
├── package.json          # Project dependencies
└── tsconfig.json         # TypeScript configuration
```

## Build and Deploy

To build the project for production:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

MIT
