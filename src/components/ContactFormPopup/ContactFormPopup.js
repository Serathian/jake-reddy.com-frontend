import React from 'react'
import ContactForm from '../ContactForm/ContactForm'
import FullScreenPopup from '../FullScreenPopup/FullScreenPopup'

const ContactFormPopup = ({ contactIsOpen, toggleContact }) => {
  return (
    <div>
      <FullScreenPopup popupIsOpen={contactIsOpen} togglePopup={toggleContact}>
        <ContactForm />
      </FullScreenPopup>
    </div>
  )
}

export default ContactFormPopup
