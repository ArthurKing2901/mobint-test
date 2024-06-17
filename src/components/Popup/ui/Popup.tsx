import { FC, memo } from 'react';
import { createPortal } from 'react-dom';
import { BackgroundPopup, PopupButton, PopupContainer, PopupStyle, PopupText } from './Popop.styled';

type PopupProps = {
  text: string;
  close: () => void;
};

const PopupComponent: FC<PopupProps> = ({ text, close }) => {
  return createPortal(
    <PopupContainer>
      <BackgroundPopup />
      <PopupStyle>
        <PopupText>{text}</PopupText>
        <PopupButton onClick={close}>Хорошо</PopupButton>
      </PopupStyle>
      <BackgroundPopup />
    </PopupContainer>,
    document.body,
  );
};

export const Popup = memo(PopupComponent);
