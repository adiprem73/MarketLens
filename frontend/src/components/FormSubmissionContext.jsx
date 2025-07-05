import { createContext, useContext, useState } from 'react'

const FormSubmissionContext = createContext()

export const FormSubmissionProvider = ({ children }) => {
  const [formSubmission, setFormSubmission] = useState(false)

  return (
    <FormSubmissionContext.Provider value={{ formSubmission, setFormSubmission }}>
      {children}
    </FormSubmissionContext.Provider>
  )
}

export const useFormSubmission = () => useContext(FormSubmissionContext)
