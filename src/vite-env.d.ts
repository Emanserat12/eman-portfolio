/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PROFILE_NAME: string
  readonly VITE_CONTACT_EMAIL: string
  readonly VITE_WHATSAPP_URL: string
  readonly VITE_PHONE_DISPLAY: string
  readonly VITE_LINKEDIN_URL: string
  readonly VITE_LINKEDIN_DISPLAY: string
  readonly VITE_GITHUB_URL: string
  readonly VITE_GITHUB_DISPLAY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
