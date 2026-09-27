import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Analytics } from '@vercel/analytics/react'
import { getPage } from './lib/seo.js'

// Never send query strings, fragments or unknown paths to telemetry.
function beforeSend(event) {
  const url = new URL(event.url)
  if (getPage(url.pathname).noindex) return null
  url.search = ''
  url.hash = ''
  return { ...event, url: url.href }
}

const root = document.getElementById('root')
const app = <StrictMode>
  <App path={window.location.pathname} />
  <SpeedInsights beforeSend={beforeSend} />
  <Analytics beforeSend={beforeSend} />
</StrictMode>

if (import.meta.env.PROD) hydrateRoot(root, app)
else createRoot(root).render(app)
