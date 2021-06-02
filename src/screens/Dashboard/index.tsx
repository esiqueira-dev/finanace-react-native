import React from 'react';
import { HighlightCard } from '../../global/components/HighlightCard';
import { HighlightCards } from '../../global/components/HighlightCard/styles';
import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGretting,
  Username,
  UserWrapper,
  Icon,
} from './styles';

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{ uri: 'https://avatars.githubusercontent.com/u/80408016?v=4' }}
            />
            <User>
              <UserGretting>Olá,</UserGretting>
              <Username>Eduardo</Username>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlightCard
          type="down"
          title="Saída"
          amount="R$ 16.400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 15.400,00"
          lastTransaction="Última entrada dia 19 de abril"
        />
      </HighlightCards>
    </Container>
  )
}
