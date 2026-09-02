import type { Config } from 'tailwindcss';

// Same palette as the app's own CSS variables (frontend/app/globals.css
// :root) — kept in sync by hand since this is a separate Next.js project.
const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        surface: '#141414',
        'surface-alt': '#0f0f0f',
        foreground: '#f2f2f2',
        muted: '#8a8a8a',
        accent: '#00ff66',
        danger: '#ff4d4d',
        outline: '#262626',
      },
      fontFamily: {
        display: ['"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        mono: ['"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        body: ['Geist', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
