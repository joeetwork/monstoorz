# Monstoorz

Bitcoin's favourite monstoorz - Crafted with digital matter

## About

This project has been converted from Svelte to Next.js 14 with the App Router. The conversion maintains the exact same functionality and appearance while leveraging Next.js features.

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + DaisyUI
- **Fonts**: Google Fonts (Roboto)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building

Build the application for production:

```bash
npm run build
```

### Starting Production Server

Start the production server:

```bash
npm start
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   ├── traits/            # Traits page route
│   ├── viewer/            # Viewer page route
│   └── globals.css        # Global styles
├── components/             # React components
│   ├── Navigation.tsx     # Navigation component
│   ├── Table.tsx          # Table component
│   └── Viewer.tsx         # Viewer component
├── lib/                    # Utilities and assets
│   ├── constants.ts       # Application constants
│   └── assets/            # Static assets
└── public/                 # Public assets
```

## Features

- **Home Page**: Landing page with minting interface
- **Traits Page**: Pattern viewer with Core/Special tabs
- **Viewer Page**: NFT viewer component
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Navigation**: Sticky navigation with active state highlighting

## Conversion Notes

This project was converted from Svelte to Next.js 14 with the following changes:

- Svelte components converted to React functional components
- SvelteKit routing replaced with Next.js App Router
- Svelte stores replaced with React hooks (useState, usePathname)
- Svelte event handlers converted to React event handlers
- Tailwind CSS classes converted from Svelte syntax to React className
- TypeScript interfaces maintained for type safety

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier

## License

This project is licensed under the terms specified in the LICENSE file.
