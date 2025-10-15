# SNS Counter Web

A React TypeScript web application for tracking social media follower counts, designed to work with microcontroller gadgets and a Go HTTP API backend.

## Features

- 📱 Real-time Instagram follower count display
- 🎨 Modern UI with shadcn/ui components
- 🌙 Dark/light theme support with CSS variables
- 📊 Number formatting for better readability
- 🔄 Manual refresh functionality
- 🎯 Responsive design optimized for various devices

## Tech Stack

- **React 19** with TypeScript
- **Vite 7** for fast development and building
- **Tailwind CSS 3.4** for styling
- **shadcn/ui** for component library
- **Biome** for code formatting and linting
- **pnpm** as package manager

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended package manager)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Development Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Code quality
pnpm check           # Format + lint + organize imports
pnpm lint           # Lint only
pnpm lint:fix       # Lint with auto-fix
pnpm format         # Format only
```

## Project Structure

```
src/
├── components/          # Custom React components
│   ├── ui/             # shadcn/ui components
│   └── InstagramCounter.tsx
├── lib/                # Utility functions
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── utils/              # Helper utilities
└── App.tsx             # Main application component
```

## API Integration

This frontend is designed to work with a Go HTTP API backend that provides:

- Bearer token authentication
- Instagram follower count endpoints
- Optimized responses for microcontroller devices

### Authentication

API requests use bearer tokens with the format:
```
Authorization: Bearer sk_live_{tenant_id}_{secret}
```

## Adding New Components

This project uses shadcn/ui. To add new components:

```bash
# Add a new shadcn/ui component
pnpm dlx shadcn@latest add [component-name]

# Example: Add a dialog component
pnpm dlx shadcn@latest add dialog
```

## Styling

The project uses Tailwind CSS with CSS variables for theming:
- Neutral color palette by default
- CSS variables for easy theme customization
- Responsive design with mobile-first approach

## Contributing

1. Follow the existing code style (enforced by Biome)
2. Use TypeScript for type safety
3. Test components thoroughly
4. Update documentation as needed

## Future Plans

- [ ] Real API integration with Go backend
- [ ] Additional social platforms (Twitter, YouTube)
- [ ] Auto-refresh functionality
- [ ] Data visualization charts
- [ ] User authentication
- [ ] Custom themes
