import React, { useState } from 'react'
import axios from 'axios'
import { ContactForm, FormContainer, ContactSection } from './Contact.styled'
import { Center } from '../../styles'
import { validateEmail } from '../../utils/helpers'

const Contact = () => {
  const [status, setStatus] = useState('Submit')
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const { name, email, message } = formState

  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    if (e.target.id === 'email') {
      const isValid = validateEmail(e.target.value)
      if (!isValid) {
        setErrorMessage('Your email is invalid.')
      } else {
        setErrorMessage('')
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.id} is required.`)
      } else {
        setErrorMessage('')
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.id]: e.target.value })
    }
  }

  const handleSubmit = async (e) => {
    if (name && email && message) {
      e.preventDefault()
      setStatus('Sending...')

      const details = {
        name,
        email,
        message,
      }

      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        }

        await axios.post('/api/contact', details, config)

        setErrorMessage('Sent!')
        setTimeout(() => {
          setErrorMessage('')
        }, 5000)
      } catch (error) {
        setErrorMessage(error)
      }
      setStatus('Submit')
    } else {
      setErrorMessage('Missing field!')
    }
  }

  return (
    <ContactSection>
      <FormContainer>
        <h2>Contact Me</h2>
        <ContactForm>
          <div className='name'>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              id='name'
              required
              placeholder='Name'
              defaultValue={name}
              onChange={handleChange}
              onBlur={handleChange}
            />
          </div>
          <div className='email'>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              required
              placeholder='Email'
              defaultValue={email}
              onChange={handleChange}
              onBlur={handleChange}
            />
          </div>
          <div className='message'>
            <label htmlFor='message'>Message:</label>
            <textarea
              id='message'
              required
              placeholder='Message'
              defaultValue={message}
              onChange={handleChange}
              onBlur={handleChange}
            />
          </div>
        </ContactForm>
        {errorMessage && (
          <Center>
            <p className='error-text'>{errorMessage}</p>
          </Center>
        )}
        <Center>
          <button type='submit' onClick={handleSubmit}>
            {status}
          </button>
        </Center>
      </FormContainer>
    </ContactSection>
  )
}

export default Contact
