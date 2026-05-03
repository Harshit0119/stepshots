# 🎬 Stepshots

> **Convert screenshots into engaging video tutorials in seconds**

Stepshots is a modern web application that transforms static screenshots into professional, interactive video tutorials. Perfect for creating documentation, onboarding guides, and educational content with minimal effort.

## ✨ Features

- **📸 Easy Screenshot Upload** - Drag and drop or bulk upload screenshots (JPG, PNG, and more)
- **✏️ Smart Annotations** - Add highlights, arrows, text boxes, and shapes to emphasize key details
- **🔊 Built-in Audio Editor** - Record voiceovers directly or upload audio files with synchronized timing
- **🎥 Professional Video Export** - Generate MP4 videos with automatic transitions and timing
- **👥 Team Collaboration** - Invite teammates to review, comment, and contribute to tutorials
- **🌐 Share Anywhere** - Get direct links, embed videos, or export to popular platforms

## 🛠️ Tech Stack

- **Frontend Framework**: [Next.js](https://nextjs.org) 16.2.4 with React 19
- **Styling**: [Tailwind CSS](https://tailwindcss.com) 4.2 with PostCSS
- **UI Components**: [Radix UI](https://www.radix-ui.com) + [Shadcn/ui](https://ui.shadcn.com)
- **Forms**: React Hook Form with Zod validation
- **Charts**: Recharts for data visualization
- **Animations**: Embla Carousel, Vaul, tw-animate-css
- **Development**: TypeScript, ESLint

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun
- pnpm (recommended)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd stepshots
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application

The app will auto-refresh as you edit files.

## 📁 Project Structure

```
stepshots/
├── app/                      # Next.js app directory
│   ├── auth/                 # Authentication pages (login, signup)
│   ├── dashboard/            # User dashboard
│   │   ├── project/          # Project management
│   │   ├── team/             # Team management
│   │   └── templates/        # Template library
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Landing page
├── components/
│   ├── landing/              # Landing page sections
│   ├── dashboard/            # Dashboard components
│   ├── ui/                   # Reusable UI components (50+ components)
│   ├── navbar.tsx            # Navigation bar
│   ├── sidebar.tsx           # Sidebar navigation
│   └── theme-provider.tsx    # Theme configuration
├── hooks/                    # Custom React hooks
├── lib/                      # Utility functions
├── public/                   # Static assets
├── styles/                   # Global styles
├── next.config.mjs           # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## 🔧 Available Scripts

```bash
# Development
pnpm dev        # Start development server

# Production
pnpm build      # Build for production
pnpm start      # Start production server

# Code Quality
pnpm lint       # Run ESLint
```

## 🎨 UI Component Library

This project includes a comprehensive collection of pre-built UI components:
- Forms: Input, Textarea, Select, Checkbox, Radio, Toggle, etc.
- Feedback: Alert, Toast, Progress, Spinner, Skeleton
- Navigation: Navbar, Sidebar, Breadcrumb, Pagination, Tabs
- Modals: Dialog, Drawer, Alert Dialog, Popover, Dropdown
- Tables, Charts, Carousels, Calendars, and more...

## 📝 Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow React best practices and hooks conventions
- Keep components small and focused
- Use Tailwind CSS for styling

### Creating New Features
1. Create components in appropriate directories
2. Use the UI component library for consistency
3. Add proper TypeScript types
4. Test responsive design

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private. All rights reserved.

## 🔗 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Components](https://www.radix-ui.com)
- [React Hook Form](https://react-hook-form.com)

---

**Built with modern web technologies to create beautiful, intuitive user experiences.**
