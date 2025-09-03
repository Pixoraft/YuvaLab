# Yuva Lab Medical Diagnostics Website

## Overview

This project is a modern medical diagnostics website for Yuva Lab, a medical testing facility based in Jalandhar, Punjab. The application provides a comprehensive digital platform for patients to learn about services, book tests, view health packages, and contact the laboratory. The website features a clean, medical-themed design with blue color schemes and focuses on building trust through professional presentation of services and testimonials.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The frontend is built as a Single Page Application (SPA) using React with TypeScript. The application uses Wouter for client-side routing, providing a lightweight alternative to React Router. The UI is constructed with shadcn/ui components built on Radix UI primitives, ensuring accessibility and consistent design patterns. State management is handled through TanStack Query for server state and React's built-in state management for local component state.

The styling approach combines Tailwind CSS for utility-first styling with CSS custom properties for theming. The design system uses a medical blue color palette (#2563eb primary, #3b82f6 secondary) with a light background (#f8fafc) and follows the design specifications for a professional medical website.

### Backend Architecture
The backend follows a minimal Express.js server structure with TypeScript support. The server is configured to serve both API routes (prefixed with /api) and static assets. The architecture includes middleware for JSON parsing, request logging, and error handling. The server uses Vite in development mode for hot module replacement and serves the built static files in production.

Storage is abstracted through an interface pattern, currently implemented with in-memory storage but designed to easily swap to database persistence. The storage layer handles user management operations with methods for creating, retrieving, and querying users.

### Data Storage Design
The project uses Drizzle ORM with PostgreSQL for database operations. The schema is defined in a shared directory, making it accessible to both frontend and backend code. The current schema includes a users table with id, username, and password fields, using PostgreSQL's gen_random_uuid() for primary key generation.

Database configuration is managed through Drizzle Kit with migrations stored in a dedicated migrations directory. The setup supports both development and production environments through environment variables, specifically DATABASE_URL for database connection.

### Component Architecture
The React application is organized into a clear component hierarchy with pages, reusable components, and UI primitives. Key pages include Home, Services, Packages, About, Contact, and Blog, each designed for specific user journeys. Components are modular and focused on single responsibilities, such as HeroSection, QuickBooking, ServicesGrid, and testimonials.

The UI component library is based on shadcn/ui, providing a comprehensive set of accessible components including forms, dialogs, navigation, and data display elements. Components use consistent props patterns and theming through CSS custom properties.

### Development Workflow
The project uses TypeScript for type safety across both frontend and backend code. Vite serves as the build tool and development server, providing fast hot module replacement and optimized production builds. The configuration supports path aliases for clean imports and includes development-specific tooling like runtime error overlays and cartographer for Replit integration.

Build process separates frontend bundling (Vite) and backend compilation (esbuild), allowing for independent deployment strategies. The development script runs the Express server with tsx for TypeScript execution, while production builds create optimized bundles for both client and server code.

## External Dependencies

### UI and Styling Libraries
- **Radix UI**: Comprehensive suite of accessible UI primitives for building the component library
- **Tailwind CSS**: Utility-first CSS framework for styling with PostCSS for processing
- **class-variance-authority**: Type-safe utility for creating CSS class variants
- **Lucide React**: Icon library providing consistent iconography throughout the application

### State Management and Data Fetching
- **TanStack Query**: Powerful data synchronization library for managing server state, caching, and background updates
- **React Hook Form**: Performance-focused library for form state management and validation
- **Hookform Resolvers**: Integration layer connecting React Hook Form with validation libraries

### Database and ORM
- **Drizzle ORM**: Type-safe ORM for PostgreSQL with excellent TypeScript integration
- **Drizzle Zod**: Schema validation integration between Drizzle and Zod
- **Neon Database**: Serverless PostgreSQL provider for scalable database hosting

### Development and Build Tools
- **Vite**: Fast build tool and development server with React plugin support
- **TypeScript**: Static type checking for improved code quality and developer experience
- **ESBuild**: Fast JavaScript bundler for production server builds

### Additional Utilities
- **date-fns**: Modern JavaScript date utility library for date manipulation and formatting
- **clsx**: Utility for conditionally joining CSS class names
- **Wouter**: Minimalist routing library for React applications
- **nanoid**: Secure URL-friendly unique string ID generator