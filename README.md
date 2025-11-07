# SNS Counter Web

A React TypeScript web application for tracking social media follower counts, designed to work with microcontroller gadgets and a Go HTTP API backend.

## Features

- 📱 Real-time social media follower count display (Instagram, Twitter, YouTube)
- 🎨 Modern UI with shadcn/ui components
- 🌙 Dark/light theme support with CSS variables
- 📊 Number formatting for better readability
- 🔄 Manual refresh functionality
- 🎯 Responsive design optimized for various devices
- 🔄 Data fetching with TanStack Query (React Query)
- 🧭 Client-side routing with React Router

## Tech Stack

- **React 19.1.1** with TypeScript
- **Vite 7.1.7** for fast development and building
- **Tailwind CSS 3.4** for styling
- **shadcn/ui** for component library
- **TanStack Query** for data fetching and caching
- **React Router 7.9.4** for routing
- **Biome 2.2.6** for code formatting and linting
- **pnpm 10.6.5** as package manager
- **babel-plugin-react-compiler** for React compilation optimization

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
├── api/                # API integration
├── assets/             # Static assets
├── components/         # Custom React components
│   ├── ui/            # shadcn/ui components (button, card, label, radio-group, select)
│   ├── FollowerCounter.tsx
│   └── UserManagement.tsx
├── hooks/             # Custom React hooks (useFollowerCount.ts)
├── lib/               # Utility libraries (utils.ts)
├── pages/             # Route components (HomePage.tsx, SettingsPage.tsx)
├── types/             # TypeScript type definitions
├── utils/             # Utility functions
└── App.tsx            # Main application component
```

## API Integration

This frontend is designed to work with a Go HTTP API backend that provides:

- Bearer token authentication
- Social media follower count endpoints
- Platform selection managed via Firestore per device
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
- [x] Multiple social platforms support (Instagram, Twitter, YouTube)
- [ ] Auto-refresh functionality
- [ ] Data visualization charts
- [ ] User authentication
- [ ] Custom themes
