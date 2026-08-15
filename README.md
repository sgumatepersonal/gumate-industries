# Gumate Industries

A React + Vite landing page for Gumate Industries, a precision sheet metal component and welding assembly manufacturing company based in Pune. The project is designed to provide a clean, scalable front-end foundation for future business website enhancements, product sections, lead capture, and content updates.

## Project Overview

This application presents the company profile, manufacturing capabilities, past work, and contact information in a professional, responsive layout. It is structured to support future additions such as:

- service and capability details
- client testimonials
- enquiry/contact form integration
- CMS-driven content updates
- SEO and analytics improvements
- multi-page routing for business growth

## Tech Stack

- React
- Vite
- JavaScript
- CSS

## Prerequisites

Before running the project, make sure you have the following installed on your machine:

- Node.js (v18 or newer recommended)
- npm

## Installation

1. Open a terminal in the project root directory.
2. Install dependencies:

```bash
npm install
```

## Run the App

Start the Vite development server:

```bash
npm run dev
```

Then open the local URL displayed in the terminal, usually:

```bash
http://localhost:5173/
```

## Build for Production

Create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```bash
gumate-industries/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── images/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── components/
│   ├── data/
│   └── styles/
├── .gitignore
├── README.md
└── node_modules/
```

## Notes

- The app is intentionally organized into reusable sections so future changes can be implemented cleanly.
- Static branding and content are separated from layout logic to make updates easier.
- Images are stored under the public assets folder and referenced from the app as needed.

## Future Enhancements

Planned improvements may include:

- dedicated product and services pages
- contact form with form validation
- animation and scroll-based effects
- SEO optimization and metadata improvements
- deployment setup for Netlify, Vercel, or hosting provider

## License

This project is for internal business use and can be extended as needed for client-facing deployment.