import { FC, useCallback, useEffect, useState } from 'react';

import { Card } from '@components/Card';
import { CompanyData } from '@api/types';
import { getAllCards } from '@api/methods';
import { Logo } from '@components/Logo/Logo';
import { Loader } from '@components/Loader';
import { NotCard } from '@components/Card/ui/NotCard';
import { Popup } from '@components/Popup';
import { RenderProps } from '@components/Layout';
import { SHOW_TIME_LOGO } from '../lib/constants';
import { Header } from '@components/Layout/ui/Layot.styled';

export const App: FC<RenderProps> = ({ isScrolledFooter }) => {
  const [logoViability, setLogoViability] = useState(true);

  const [openPopup, setOpenPopup] = useState(false);
  const [textPopup, setTextPopup] = useState<string | null>(null);

  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [cardData, setCardData] = useState<CompanyData[]>([]);

  const handleClosePopup = useCallback(() => {
    setOpenPopup(false);
    setTextPopup(null);
    setError(null);
  }, []);

  const handleEyeBtn = useCallback((id: string) => {
    setOpenPopup(true);
    setTextPopup(`Нажата кнопка "Глаз", ид компании: ${id}`);
  }, []);
  const handleTrashBtn = useCallback((id: string) => {
    setOpenPopup(true);
    setTextPopup(`Нажата кнопка "Корзина", ид компании: ${id}`);
  }, []);
  const handleInfoBtn = useCallback((id: string) => {
    setOpenPopup(true);
    setTextPopup(`Нажата кнопка "Подробнее", ид компании: ${id}`);
  }, []);

  useEffect(() => {
    setLoading(true);
    getAllCards({ offset, limit: 5 })
      .then(data => {
        setCardData(prevState => prevState.concat(data));
      })
      .catch(e => {
        const { response } = e;

        if (response?.status === 500) {
          setTextPopup('Все упало');
        }
        if (response?.status === 400) {
          setTextPopup(response?.data?.message ?? 'Ошибка');
        }
        if (response?.status === 401) {
          setTextPopup(response?.data?.message ?? 'Ошибка авторизации');
        }
        setOpenPopup(true);
        setError(e);
      })
      .finally(() => setLoading(false));
  }, [offset]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLogoViability(false);
    }, SHOW_TIME_LOGO);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (isScrolledFooter && !error && !loading) {
      setOffset(prevState => (prevState += 5));
    }
  }, [isScrolledFooter]);

  return (
    <>
      {logoViability ? (
        <Logo />
      ) : (
        <>
          {openPopup && textPopup && <Popup text={textPopup} close={handleClosePopup} />}

          <Header>Управление картами</Header>

          {!cardData.length && !loading && <NotCard />}
          {cardData.map(card => (
            <Card
              key={card?.company?.companyId}
              {...card.mobileAppDashboard}
              {...card.customerMarkParameters}
              companyId={card?.company?.companyId}
              onClickEye={handleEyeBtn}
              onClickInfo={handleInfoBtn}
              onClickTrash={handleTrashBtn}
            />
          ))}
          {loading && <Loader />}
        </>
      )}
    </>
  );
};
