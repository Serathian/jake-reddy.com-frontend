import React, { useState, useRef } from 'react'
import {
  ContactFormContainer,
  ContactHeader,
  StyledContactForm,
  ContactFirstNameField,
  ContactLastNameField,
  ContactEmailField,
  ContactMessageField,
  ContactButtonWrapper,
  ContactButton,
  ContactReCAPTCHA,
} from './ContactFormElements'
import { toast } from 'react-toastify'
import { useFormik } from 'formik'
import ContactSchema from '../../schema/contactSchema'
import { sendContact } from '../../services/contactService'

const ContactForm = ({ togglePopup }) => {
  const [status, setStatus] = useState('Send!')
  const [captchaKey, setCaptchaValue] = useState(null)
  const { REACT_APP_RECAPTCHA_SITE_KEY } = process.env

  const recaptchaRef = useRef()

  const handleCaptcha = (captchaKey) => {
    setCaptchaValue(captchaKey)
  }

  const getCaptchaKey = () => {
    recaptchaRef.current.execute()
  }

  const handleSubmit = async (values) => {
    setStatus('Parsing Data...')
    const { firstName, lastName, email, message } = values
    let details = {
      name: firstName + ' ' + lastName,
      email,
      message,
      captchaKey,
    }
    setStatus('Sending...')
    try {
      let response = await sendContact(details)
      if (response.sent) {
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
    } catch (error) {
      console.log(error)
      toast.error('Something went wrong, try again.', {
        position: 'top-center',
        autoClose: 2000,
      })
      setStatus('Send!')
    }
  }

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },
    validationSchema: ContactSchema,
    onSubmit: (values) => {
      getCaptchaKey()
      if (captchaKey != null) {
        console.log(captchaKey)
        handleSubmit(values)
      } else {
        console.log('captchaKey is NULL')
        toast.error('Failed to verify reCAPTCHA, try again.', {
          position: 'top-center',
          autoClose: 2000,
        })
      }
    },
  })

  return (
    <ContactFormContainer>
      <StyledContactForm onSubmit={formik.handleSubmit}>
        <ContactHeader>What are you waiting for?</ContactHeader>
        <ContactFirstNameField
          label='First Name'
          type='text'
          id='firstName'
          autoComplete='none'
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <ContactLastNameField
          label='Last Name'
          type='text'
          id='lastName'
          autoComplete='none'
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
        <ContactEmailField
          label='Email'
          type='email'
          id='email'
          autoComplete='none'
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          onBlur={getCaptchaKey}
        />
        <ContactMessageField
          label='Message'
          id='message'
          multiline
          rows={5}
          autoComplete='none'
          value={formik.values.message}
          onChange={formik.handleChange}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
        />
        {/* <ContactCaptchaWrapper> */}
        <ContactReCAPTCHA
          sitekey={REACT_APP_RECAPTCHA_SITE_KEY}
          ref={recaptchaRef}
          size='invisible'
          badge='bottomleft'
          onChange={handleCaptcha}
        />
        {/* {formik.errors.captcha ? (
            <ContactError>{formik.errors.captcha}</ContactError>
          ) : null} */}
        {/* </ContactCaptchaWrapper> */}

        <ContactButtonWrapper>
          <ContactButton
            color='primary'
            variant='contained'
            fullWidth
            type='submit'>
            {status}
          </ContactButton>
        </ContactButtonWrapper>
      </StyledContactForm>
    </ContactFormContainer>
  )
}

export default ContactForm
