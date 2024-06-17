import styled, { createGlobalStyle } from 'styled-components';

import SegoeUIRegular from '../../../assets/fonts/SegoeUIRegular/SegoeUIRegular.woff';
import SegoeUIBold from '../../../assets/fonts/SegoeUIBold/SegoeUIBold.woff';

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'SegoeUIRegular';
        src: url(${SegoeUIRegular}) format('woff');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'SegoeUIBold';
        src: url(${SegoeUIBold}) format('woff');
        font-weight: 600;
        font-style: normal;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'SegoeUIRegular', sans-serif;
        font-size: ${({ theme }) => theme.sizes.text1};

        @media (min-width: 400px) {
            font-size: ${({ theme }) => theme.sizes.text2};
        }
    }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

export const Wrapper = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.colors.lightGrey};
  overflow: scroll;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  padding: ${({ theme }) => theme.sizes.margin1} 0;
  margin-bottom: ${({ theme }) => theme.sizes.margin1};
  color: ${({ theme }) => theme.colors.blue};
  background: ${({ theme }) => theme.colors.white};
  border-top: 2px solid ${({ theme }) => theme.colors.darkGrey};
`;

export const Scrolled = styled.div`
  width: 100%;
  height: 1vh;
`;
