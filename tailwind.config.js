/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#07080A',
        surface: '#0E0F12',
        elevated: '#15161A',
        raised: '#1C1D22',
        line: 'rgba(255,255,255,0.06)',
        'line-strong': 'rgba(255,255,255,0.12)',
        ink: '#EDEDEF',
        muted: '#9BA1A6',
        faint: '#6B7176',
        gold: '#E6C594',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      maxWidth: { page: '76rem' },
    },
  },
  plugins: [],
}
