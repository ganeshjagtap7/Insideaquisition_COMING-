import './App.css'
import { useState } from 'react'

function App() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    
    fetch(form.action, {
      method: 'POST',
      body: formData
    })
    .then(() => {
      setSubmitted(true)
      form.reset()
    })
    .catch((error) => {
      console.error('Error submitting form:', error)
    })
  }

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">Insideaquisition</h1>
        <p className="subtitle">Coming Soon - Be the first to know when we launch!</p>
        
        {submitted ? (
          <div className="success-message">
            <p>🎉 Thanks for joining! We'll be in touch soon.</p>
          </div>
        ) : (
          <form 
            className="launchlist-form" 
            action="https://getlaunchlist.com/s/BexQk0" 
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <input 
                name="name" 
                type="text" 
                placeholder="Your name"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <input 
                name="email" 
                type="email" 
                placeholder="Your email"
                className="form-input"
                required
              />
            </div>
            <button type="submit" className="submit-button">
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default App
