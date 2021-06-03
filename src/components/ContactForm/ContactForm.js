import { formatMs, styled } from '@material-ui/core'
import React, { useState } from 'react'
import {
  ContactFormContainer,
  ContactFormWrapper,
  StyledContactForm,
  ContactTextField,
  ContactButtonWrapper,
  ContactButton,
  StyledReCAPTCHA,
} from './ContactFormElements'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ContactForm = ({ togglePopup }) => {
  const [status, setStatus] = useState('Send!')
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [message, setMessage] = useState(null)
  const { REACT_APP_RECAPTCHA_SITE_KEY } = process.env

  const handleCaptcha = (value) => {
    console.log(value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    let details = {
      name: name,
      email: email,
      message: message,
    }
    let response = await fetch('http://localhost:3002/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(details),
    })
    setStatus('Submit')
    let result = await response.json()

    if (result.sent) {
      toast.success('Message Sent!', {
        position: 'top-center',
        autoClose: 2000,
      })
      togglePopup()
    } else {
      toast.error('Something went wrong, try again.', {
        position: 'top-center',
        autoClose: 2000,
      })
    }
  }
  return (
    <ContactFormContainer>
      <StyledContactForm onSubmit={handleSubmit}>
        <h3>What are you waiting for?</h3>
        <ContactTextField
          label='Full Name'
          type='text'
          autoComplete='none'
          onChange={(e) => setName(e.target.value)}
        />
        <ContactTextField
          label='Email'
          type='email'
          id='email'
          autoComplete='none'
          onChange={(e) => setEmail(e.target.value)}
        />
        <ContactTextField
          label='Message'
          id='email'
          multiline
          rows={5}
          autoComplete='none'
          onChange={(e) => setMessage(e.target.value)}
        />
        <StyledReCAPTCHA
          sitekey={REACT_APP_RECAPTCHA_SITE_KEY}
          onChange={handleCaptcha}
        />
        <ContactButtonWrapper>
          <ContactButton type='submit'>{status}</ContactButton>
        </ContactButtonWrapper>
      </StyledContactForm>
    </ContactFormContainer>
  )
}

export default ContactForm
