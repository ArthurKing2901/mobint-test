import { FC } from 'react';
import logo from '@img/logo.png';
import styled from 'styled-components';

const Img = styled.img`
  max-width: ${({ theme }) => theme.sizes.logoSizeLarge};
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${({ theme }) => theme.colors.white};
`;

export const Logo: FC = () => {
  return (
    <ImgWrapper>
      <Img src={logo} alt="logo" />
    </ImgWrapper>
  );
};
