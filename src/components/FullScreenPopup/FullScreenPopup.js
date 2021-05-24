import React from 'react'
import {
  FullScreenPopupBg,
  FullScreenPopupContainer,
  FullScreenPopupWrapper,
  FullScreenPopupBtn,
} from './FullScreenPopupElements'

const FullScreenPopup = ({ children, popupIsOpen, togglePopup }) => {
  if (popupIsOpen) {
    return (
      <div>
        <FullScreenPopupContainer>
          <FullScreenPopupBg onClick={togglePopup}></FullScreenPopupBg>
          <FullScreenPopupWrapper onClick={togglePopup}>
            <FullScreenPopupBtn onClick={togglePopup}>X</FullScreenPopupBtn>
            {children}
          </FullScreenPopupWrapper>
        </FullScreenPopupContainer>
      </div>
    )
  } else {
    return null
  }
}

export default FullScreenPopup
