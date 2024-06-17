import styled from 'styled-components';

export const LoaderStyle = styled.div`
  width: ${({ theme }) => theme.sizes.sizePreloader};
  height: ${({ theme }) => theme.sizes.sizePreloader};
  border: 5px solid ${({ theme }) => theme.colors.black};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: ${({ theme }) => theme.sizes.margin2} 0;
`;

export const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.sizes.text2};
`;
