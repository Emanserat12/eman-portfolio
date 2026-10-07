import { readFileSync } from 'node:fs'
import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import react from '@vitejs/plugin-react'

function inlineSingleFileAssets(): Plugin {
  return {
    name: 'inline-single-file-assets',
    enforce: 'post',
    generateBundle(_options, bundle) {
      const htmlAsset = bundle['index.html']
      if (!htmlAsset || htmlAsset.type !== 'asset') {
        throw new Error('Unable to locate index.html for the single-file build.')
      }

      let html = typeof htmlAsset.source === 'string' ? htmlAsset.source : new TextDecoder().decode(htmlAsset.source)
      const findOutput = (url: string) => {
        const path = url.split(/[?#]/, 1)[0].replace(/^\/+/, '')
        return Object.values(bundle).find((output) => output.fileName === path)
      }

      html = html.replace(/<script\b[^>]*\bsrc=["']([^"']+)["'][^>]*>\s*<\/script>/g, (_tag, url: string) => {
        const output = findOutput(url)
        if (!output || output.type !== 'chunk') {
          throw new Error(`Unable to inline JavaScript asset: ${url}`)
        }
        return `<script type="module">${output.code.replace(/<\/script/gi, '<\\/script')}</script>`
      })

      html = html.replace(/<link\b[^>]*href=["']([^"']+\.css(?:\?[^"']*)?)["'][^>]*>/g, (_tag, url: string) => {
        const output = findOutput(url)
        if (!output || output.type !== 'asset') {
          throw new Error(`Unable to inline CSS asset: ${url}`)
        }
        const css = typeof output.source === 'string' ? output.source : new TextDecoder().decode(output.source)
        return `<style>${css}</style>`
      })

      html = html.replace(/<link\b[^>]*href=["']([^"']+\.svg(?:\?[^"']*)?)["'][^>]*>/g, (tag, url: string) => {
        const output = findOutput(url)
        if (!output || output.type !== 'asset') return tag
        const svg = typeof output.source === 'string' ? output.source : new TextDecoder().decode(output.source)
        return tag.replace(url, `data:image/svg+xml,${encodeURIComponent(svg)}`)
      })

      const favicon = readFileSync(new URL('./public/favicon.svg', import.meta.url), 'utf8')
      html = html.replace('/favicon.svg', `data:image/svg+xml,${encodeURIComponent(favicon)}`)
      htmlAsset.source = html
      for (const [fileName, output] of Object.entries(bundle)) {
        if (
          output.type === 'chunk' ||
          (output.type === 'asset' && (fileName.endsWith('.css') || fileName.endsWith('.svg')))
        ) {
          delete bundle[fileName]
        }
      }
    },
  }
}

// `npm run build` produces the normal multi-file build for Netlify.
// `npm run build:single` inlines the JavaScript and CSS into one HTML file for previews.
export default defineConfig(({ mode }) => ({
  plugins: [react(), ...(mode === 'single' ? [inlineSingleFileAssets()] : [])],
  build: mode === 'single' ? { assetsInlineLimit: Infinity, cssCodeSplit: false, copyPublicDir: false } : undefined,
}))
