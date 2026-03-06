import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({

  runtimeConfig: {
    googleScriptUrl: process.env.GOOGLE_SCRIPT_URL,
    googleScriptSecret: process.env.GOOGLE_SCRIPT_SECRET
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  nitro: {
    prerender: {
      crawlLinks: true
    }
  },

  routeRules: {
    // Pre-render all content pages at build time (no SQLite at runtime)
    '/': { prerender: true },
    '/blog': { prerender: true },
    '/blog/**': { prerender: true },
    '/work': { prerender: true },
    '/work/**': { prerender: true },
    '/project': { prerender: true },
    '/project/**': { prerender: true },

    // Keep API routes as serverless functions
    '/api/**': { cors: true }, // Optional: enable CORS if needed
  },

  css: [
    // KaTeX styles (needed to display math correctly)
    'katex/dist/katex.min.css',
    './app/assets/css/main.css'
  ],
  modules: ['@nuxt/content', '@nuxtjs/color-mode', '@nuxtjs/seo'],
  site: {
    url: 'https://nishsingh.in',
    name: 'Nishant Singh - Portfolio',
    description: 'Portfolio of Nishant Kumar Singh, a Data Analyst and blogger.',
    defaultLocale: 'en',
  },
  content: {
    build: {
      markdown: {
        remarkPlugins: {
          'remark-math': {}
        },
        rehypePlugins: {
          'rehype-katex': {
            output: 'html'
          }
        },
        highlight: {
          theme: "catppuccin-macchiato",
          langs: ['python', 'c', 'powershell', 'bash', 'json']
        },
      }
    },
  }
})