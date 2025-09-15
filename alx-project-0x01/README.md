# 🏗️ React Architect: Mastering Advanced Structures in Next.js

A **comprehensive Next.js application** that demonstrates modern front-end principles through real-world features like posts and users management.  
Built with **TypeScript, Tailwind CSS, and Next.js**, this project highlights **component-based architecture, state management, and API integration**.

---

## 📖 Project Description

This project serves as a **step-up learning path** from basic setup to advanced Next.js patterns.  
It covers:

- Dynamic page routing
- API-driven content (Posts & Users)
- Reusable UI components
- Interactive modals for content creation
- State management with hooks
- Static site generation

The application integrates **JSONPlaceholder API** to simulate real-world backend functionality.

---

## 🎯 Learning Objectives

By completing this project, you will:

- Scaffold a Next.js app with TypeScript, Tailwind, and ESLint
- Implement **dynamic routing** and navigation
- Create **typed reusable components** with props & state
- Fetch and display external API data
- Build and manage interactive **modal dialogs**
- Apply **getStaticProps** for static generation
- Manage state using React hooks (`useState`, lifting state up)
- Structure a scalable project directory
- Apply responsive design principles with Tailwind CSS

---

## 🛠 Requirements

### Technical

- **Node.js** v16+
- **npm** or **yarn**
- **Next.js** (latest)
- **TypeScript**
- **Tailwind CSS**
- **ESLint**

### Functional

- Multi-page navigation (`Home`, `Posts`, `Users`)
- API integration with **JSONPlaceholder**
- Card components for posts & users
- Modals for creating posts & users
- Responsive layouts with Tailwind

---

## 📂 Best Practices

### Component Architecture

- Atomic design principles
- Split into **presentational** vs **container** components
- Shared UI in `components/common/`

### Type Safety

- Interfaces for props (`PostProps`, `UserProps`, etc.)
- Strong typing for events and component state

### Styling

- Tailwind CSS utilities
- Consistent spacing & typography
- Fully responsive layouts

### State Management

- `useState` for local state
- Minimal, well-structured state
- State lifted where necessary

## 📂 Project Architecture

```plaintext
alx-project-0x01/
├── components/               # Reusable UI components
│   ├── common/               # Shared components
│   │   ├── Button.tsx
│   │   ├── PostCard.tsx
│   │   ├── UserCard.tsx
│   │   └── Modal.tsx
│   ├── layout/               # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── modals/               # Modal dialogs
│       ├── PostModal.tsx
│       └── UserModal.tsx
│
├── interfaces/               # TypeScript type definitions
│   ├── post.ts
│   ├── user.ts
│   └── modal.ts
│
├── pages/                    # Next.js routing system
│   ├── posts/                # Posts pages
│   │   └── index.tsx
│   ├── users/                # Users pages
│   │   └── index.tsx
│   ├── _app.tsx              # App wrapper
│   ├── _document.tsx         # Document customization
│   └── index.tsx             # Home page
│
├── public/                   # Static assets (images, icons, etc.)
│   └── favicon.ico
│
├── styles/                   # Global styles
│   ├── globals.css
│   └── tailwind.css
│
├── utils/                    # Helper functions (optional)
│   └── api.ts
│
├── .eslintrc.json            # ESLint configuration
├── tailwind.config.js        # Tailwind config
├── tsconfig.json             # TypeScript config
├── package.json              # Project metadata & dependencies
└── README.md                 # Project documentation
```
