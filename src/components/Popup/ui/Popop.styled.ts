import styled from 'styled-components';

export const PopupContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  z-index: 999;
`;

export const PopupStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
  width: 100%;
  margin: ${({ theme }) => theme.sizes.margin1};
  background: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  z-index: 20;
`;

export const PopupButton = styled.button`
  border: none;
  padding: ${({ theme }) => theme.sizes.padding1} 10vw;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.blue};
  margin: ${({ theme }) => theme.sizes.margin1} 0;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.sizes.text2};
  cursor: pointer;
  z-index: 20;
`;
export const PopupText = styled.p`
  margin-top: 5vw;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const BackgroundPopup = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.colors.darkGrey};
  filter: opacity(0.7) brightness(50%);
  height: 100vh;
  width: 100%;
`;
