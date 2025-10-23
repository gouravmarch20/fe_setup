import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import * as Sentry from '@sentry/react'

Sentry.init({
    dsn: 'https://ca6c8883abfc8f39bf5c4a7585bb6989@o4505616976838656.ingest.us.sentry.io/4509344682868736',
    enabled: import.meta.env.VITE_ENV === 'production',
    // Setting this option to true will send default PII data to Sentry.
    // For example, automatic IP address collection on events
    sendDefaultPii: true
})

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
)
