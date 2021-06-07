import React from "react";
import { HighlightCard } from "../../global/components/HighlightCard";
import { HighlightCards } from "../../global/components/HighlightCard/styles";
import { TransactionCard, TransactionCardProps } from "../../global/components/TransactionCard";
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
  Transactions,
  TransacrionsTitle,
  TransactionList,
} from "./styles";

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      date: "04/07/1996",
      category: {
        icon: "dollar-sign",
        name: "Vendas",
      },
    },
    {
      id: '2',
      type: 'negative',
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      date: "04/07/1996",
      category: {
        icon: "coffee",
        name: "Alimentação",
      },
    },

    {
      id: '3',
      type: 'negative',
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      date: "04/07/1996",
      category: {
        icon: "shopping-bag",
        name: "Vendas",
      },
    },
    {
      id: '4',
      type: 'negative',
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      date: "04/07/1996",
      category: {
        icon: "dollar-sign",
        name: "Vendas",
      },
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/80408016?v=4",
              }}
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

      <Transactions>
        <TransacrionsTitle>Listagem</TransacrionsTitle>
        <TransactionList
          data={data}
          keyExtractor={( item ) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
