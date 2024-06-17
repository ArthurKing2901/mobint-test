import styled from 'styled-components';

export const CardStyle = styled.div<{ background?: string }>`
  width: 100%;
  background: ${({ theme, background }) => background || theme.colors.white};
  border-radius: 20px;
  padding: ${({ theme }) => theme.sizes.margin1};
`;

export const ContainerCard = styled.div`
  display: flex;
  justify-content: center;
  margin: ${({ theme }) => theme.sizes.margin1} ${({ theme }) => theme.sizes.margin1};
`;

export const LogoImg = styled.img`
  width: ${({ theme }) => theme.sizes.logoSize};
  border-radius: 50%;
`;

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${({ theme }) => theme.sizes.margin2};
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkGrey};
`;

export const TitleCard = styled.div<{ color?: string }>`
  color: ${({ theme, color }) => color || theme.colors.black};
  font-size: ${({ theme }) => theme.sizes.text2};
`;

export const BodyCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BodyCardPoints = styled.div<{
  сolor?: string;
  afterсolor?: string;
}>`
  color: ${({ theme, сolor }) => сolor || theme.colors.black};
  font-size: ${({ theme }) => theme.sizes.text0};
  margin: ${({ theme }) => theme.sizes.margin1} 0;

  &::after {
    color: ${({ theme, afterсolor }) => afterсolor || theme.colors.darkGrey};
    content: ' баллов';
    font-size: ${({ theme }) => theme.sizes.text2};
  }
`;

export const BodyCardInfo = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.sizes.margin2};
`;

export const CashbackBlock = styled.div`
  flex: 1;
`;

export const Cashback = styled.div<{ color?: string }>`
  color: ${({ theme, color }) => color || theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.sizes.text3};
  margin-bottom: ${({ theme }) => theme.sizes.margin2};
`;

export const CashbackDescription = styled.div<{ color?: string }>`
  color: ${({ theme, color }) => color || theme.colors.black};
  font-size: ${({ theme }) => theme.sizes.text2};
`;

export const LevelBlock = styled.div`
  flex: 2;
`;

export const Level = styled.div<{ color?: string }>`
  color: ${({ theme, color }) => color || theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.sizes.text3};
  margin-bottom: ${({ theme }) => theme.sizes.margin2};
`;

export const LevelDescription = styled.div<{ color?: string }>`
  color: ${({ theme, color }) => color || theme.colors.black};
  font-size: ${({ theme }) => theme.sizes.text2};
`;

export const FooterCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.darkGrey};
`;
export const IconButton = styled.button`
  flex: 1;
  border: none;
  padding: 0;
  background: none;
  margin-top: ${({ theme }) => theme.sizes.margin1};
  margin-right: ${({ theme }) => theme.sizes.margin1};

  color: ${({ theme }) => theme.colors.blue};
  cursor: pointer;
  pointer-events: none;
`;

export const Icon = styled.img`
  background: ${({ theme }) => theme.colors.blue};
  padding: 1vw;
  width: ${({ theme }) => theme.sizes.iconSize};
  border-radius: 50%;
  pointer-events: auto;
`;

export const MoreDetailsButton = styled.button<{ background?: string; color?: string }>`
  flex: 2;
  border: none;
  color: ${({ theme, color }) => color || theme.colors.blue};
  font-size: ${({ theme }) => theme.sizes.text2};
  background: ${({ theme, background }) => background || theme.colors.lightGrey};
  padding: ${({ theme }) => theme.sizes.padding1};
  margin-top: ${({ theme }) => theme.sizes.margin2};
  border-radius: 16px;
  cursor: pointer;
`;

export const ZeroCard = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.sizes.text2};
`;
