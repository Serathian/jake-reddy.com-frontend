import styled from 'styled-components/macro'
import TextField from '@material-ui/core/TextField'
import { Button } from '../ButtonElement'
import { colorPallet } from '../../assets/ColorPallet'
import ReCAPTCHA from 'react-google-recaptcha'

export const ContactFormContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  z-index: 2000;
`

export const ContactFormWrapper = styled.div`
  height: 100vh;
  width: 100vh;
  z-index: 2001;
`
export const StyledContactForm = styled.form`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 50px;
  margin: 50px;
`
export const ContactTextField = styled(TextField)`
  color: #fff;
  margin-top: 20px;
`

export const ContactButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
`
export const ContactButton = styled(Button)``

export const StyledReCAPTCHA = styled(ReCAPTCHA)`
  margin-top: 20px;
`
