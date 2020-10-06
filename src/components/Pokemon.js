import React from "react";
import { Container, Header, Body, BodyMeta, BodyAttacks } from "./styles";

export function Pokemon({ pokemon }) {
  return (
    <Container>
      <Header className="pokemon-name">
        <p>{pokemon.name}</p>
      </Header>
      <Body>
        <BodyMeta>
          <span>HP: {pokemon.maxHP}</span>
          <span>CP: {pokemon.maxCP}</span>
        </BodyMeta>
        <div className="pokemon-image">
          <img src={pokemon.image} alt={pokemon.name} />
        </div>
        <BodyAttacks>
          {pokemon?.attacks?.special
            .slice(0, 3)
            .map(({ name }, index) => {
              return (
                <span key={index}>
                  {name}
                </span>
              );
            })}
        </BodyAttacks>
      </Body>
    </Container>
  );
}
