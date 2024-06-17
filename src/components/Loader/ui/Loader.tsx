import { FC } from 'react';
import { Container, LoaderStyle, LoaderWrapper, Text } from './Loader.styled';

export const Loader: FC = () => {
  return (
    <Container>
      <LoaderWrapper>
        <LoaderStyle />
        <Text>Загрузка компаний</Text>
      </LoaderWrapper>
    </Container>
  );
};
