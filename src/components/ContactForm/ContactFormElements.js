import styled from 'styled-components/macro'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
//import { Button } from '../ButtonElement'
import { colorPallet } from '../../assets/ColorPallet'
import ReCAPTCHA from 'react-google-recaptcha'

export const ContactFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  z-index: 2000;
`

export const StyledContactForm = styled.form`
  background-color: white;
  display: grid;
  justify-content: center;
  align-items: center;
  align-content: center;
  grid-column-gap: 15px;
  grid-template-areas:
    'head head'
    'first last'
    'first last'
    'email email'
    'message message'
    'captcha captcha'
    'button button';
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto auto auto auto auto;
  padding: 50px;
  margin: 50px;

  @media screen and (max-width: 780px) {
    grid-template-areas:
      'head head'
      'first first'
      'last last'
      'email email'
      'message message'
      'captcha captcha'
      'button button';
  }
`

export const ContactHeader = styled.h3`
  justify-self: center;
  grid-area: head;
`
export const ContactFirstNameField = styled(TextField)`
  grid-area: first;
`
export const ContactLastNameField = styled(TextField)`
  grid-area: last;
`

export const ContactEmailField = styled(TextField)`
  grid-area: email;
`

export const ContactMessageField = styled(TextField)`
  grid-area: message;
`

export const ContactButtonWrapper = styled.div`
  grid-area: button;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin-top: 20px;
`
export const ContactButton = styled(Button)`
  background-color: ${colorPallet.accent};
  width: 200px;
`
export const ContactCaptchaWrapper = styled.div`
  grid-area: captcha;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin-top: 20px;
`
export const ContactReCAPTCHA = styled(ReCAPTCHA)`
  margin-top: 20px;
`
