import { FC, memo } from 'react';
import eyeIcon from '@img/eye_white.png';
import trashIcon from '@img/trash_white.png';
import {
  BodyCard,
  BodyCardInfo,
  BodyCardPoints,
  CardStyle,
  Cashback,
  CashbackBlock,
  CashbackDescription,
  ContainerCard,
  IconButton,
  FooterCard,
  HeaderCard,
  Icon,
  Level,
  LevelBlock,
  LevelDescription,
  LogoImg,
  TitleCard,
  MoreDetailsButton,
} from './Card.styled';
import { MobileAppDashboard, CustomerMarkParameters } from '@api/types';

type CardPropsType = CustomerMarkParameters &
  MobileAppDashboard & {
    companyId: string;
    onClickEye?: (companyId: string) => void;
    onClickTrash?: (companyId: string) => void;
    onClickInfo?: (companyId: string) => void;
  };

const CardComponent: FC<CardPropsType> = ({
  companyId,
  loyaltyLevel,

  accentColor,
  cardBackgroundColor,
  companyName,
  backgroundColor,
  highlightTextColor,
  logo,
  mainColor,
  textColor,

  onClickEye,
  onClickInfo,
  onClickTrash,
}) => {
  const handleEyeBtn = () => {
    onClickEye?.(companyId);
  };
  const handleTrashBtn = () => {
    onClickTrash?.(companyId);
  };
  const handleInfoBtn = () => {
    onClickInfo?.(companyId);
  };
  const capFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <ContainerCard>
      <CardStyle background={cardBackgroundColor}>
        <HeaderCard>
          <TitleCard color={highlightTextColor}>{companyName}</TitleCard>
          <LogoImg src={logo} alt="logo" />
        </HeaderCard>

        <BodyCard>
          <BodyCardPoints сolor={highlightTextColor} afterсolor={textColor}>
            {loyaltyLevel?.markToCash}
          </BodyCardPoints>

          <BodyCardInfo>
            <CashbackBlock>
              <Cashback color={textColor}>Кешбэк</Cashback>
              <CashbackDescription color={highlightTextColor}>{loyaltyLevel?.number} %</CashbackDescription>
            </CashbackBlock>

            <LevelBlock>
              <Level color={textColor}>Уровень</Level>
              <LevelDescription color={highlightTextColor}>{capFirstLetter(loyaltyLevel?.name)}</LevelDescription>
            </LevelBlock>
          </BodyCardInfo>
        </BodyCard>

        <FooterCard>
          <IconButton onClick={handleEyeBtn}>
            <Icon src={eyeIcon} />
          </IconButton>

          <IconButton onClick={handleTrashBtn}>
            <Icon src={trashIcon} />
          </IconButton>

          <MoreDetailsButton onClick={handleInfoBtn} background={backgroundColor} color={mainColor}>
            Подробнее
          </MoreDetailsButton>
        </FooterCard>
      </CardStyle>
    </ContainerCard>
  );
};

export const Card = memo(CardComponent);
