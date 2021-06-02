import React from "react";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { HighlightCard } from "../../global/components/HighlightCard";
import { HighlightCards } from "../../global/components/HighlightCard/styles";
import { TransactionCard } from "../../global/components/TransactionCard";
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

export function Dashboard() {
  const data = [
    {
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      date: "04/07/1996",
      category: {
        icon: "dollar-sign",
        name: "Vendas",
      },
    },
    {
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      date: "04/07/1996",
      category: {
        icon: "dollar-sign",
        name: "Vendas",
      },
    },

    {
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      date: "04/07/1996",
      category: {
        icon: "dollar-sign",
        name: "Vendas",
      },
    },
    {
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
          renderItem={({ item }) => <TransactionCard data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: getBottomSpace()
          }}
        />
      </Transactions>
    </Container>
  );
}
