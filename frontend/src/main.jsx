import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FormSubmissionProvider } from './components/FormSubmissionContext.jsx' // ✅ import provider

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <FormSubmissionProvider> {/* ✅ wrap your app with the provider */}
    {/* ✅ pass the formSubmission variable to the provider */}
    <App />
  </FormSubmissionProvider>
  </StrictMode>,
)
