import { useCallback, useRef, useState } from 'react'

/** Copies text to the clipboard and reports success for a short moment. */
export function useCopy(timeout = 2000) {
  const [copied, setCopied] = useState(false)
  const timer = useRef<number>()

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text)
      } catch {
        // Fallback for browsers or frames that block the async clipboard API
        const el = document.createElement('textarea')
        el.value = text
        el.setAttribute('readonly', '')
        el.style.position = 'absolute'
        el.style.left = '-9999px'
        document.body.appendChild(el)
        el.select()
        try {
          document.execCommand('copy')
        } catch {
          return false
        } finally {
          document.body.removeChild(el)
        }
      }
      setCopied(true)
      window.clearTimeout(timer.current)
      timer.current = window.setTimeout(() => setCopied(false), timeout)
      return true
    },
    [timeout],
  )

  return { copied, copy }
}
