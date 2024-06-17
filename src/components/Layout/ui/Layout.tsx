import { memo, useEffect, useRef, useState } from 'react';
import type { FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { APP_THEME } from '../lib/constatns';
import { Container, GlobalStyles, Header, Scrolled, Wrapper } from './Layot.styled';
import { RenderProps } from '../lib/types';

const LayoutComponent: FC<{
  render: (props: RenderProps) => ReactNode;
}> = ({ render }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isScrolledFooter, setIsScrolledFooter] = useState(false);

  useEffect(() => {
    const observable = ref.current;

    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0];
        setIsScrolledFooter(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      },
    );

    if (observable) {
      observer.observe(observable);
    }

    return () => {
      if (observable) {
        observer.unobserve(observable);
      }
    };
  }, []);

  return (
    <ThemeProvider theme={APP_THEME}>
      <Container>
        <Wrapper>
          {render({ isScrolledFooter })}
          <Scrolled ref={ref} />
        </Wrapper>
      </Container>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export const Layout = memo(LayoutComponent);
