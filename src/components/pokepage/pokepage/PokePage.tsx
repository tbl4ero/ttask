import React from "react";

import Stats from "../stats/Stats";
import { setPokemon } from "../../../store/actions";
import { NameTitle, TypeElement, StyledLink, AbilitiesContainer } from './PokePage.styles';
import SamplePage from "../../samplepage/SamplePage";
import InfoTabs from '../tabs/Tabs';

const PokeComp = (props: any) => (
  <>
    <NameTitle>{props.match.params.name}</NameTitle>
    <h1 style={{
      textAlign: 'center',
      color: 'rgba(255,255,255,.7)',
      fontWeight: 'bolder',
      letterSpacing: '2px',
      marginTop: '10px',
      fontSize: '45px',
      marginBottom: '25px',
      textShadow: '0 0 12px rgb(0 0 0 / 25%)'
    }}>
      #{`${props.data.id}`.padStart(3, '0')}
    </h1>
    <Stats pokemon={props.data} />
    {/* <InfoTabs
      tabs={[
        {
          title: 'ABILITIES',
          content: 
            <AbilitiesContainer>
           {props.data.abilities.map((ability: any) => (
            <StyledLink style={{ display: 'block' }} to={`/ability/${ability.ability.name}`}>
              {ability.ability.name.split("-").join(" ")}
            </StyledLink>
          ))}
          </AbilitiesContainer>
        },
        {
          title: 'TYPES',
          content: 
              props.data.types.map((type: any) => (
              <TypeElement type={type.type.name}>
                {type.type.name}
              </TypeElement>
            ))
        },
      ]}
    /> */}
  </>
);

const PokePage = (props: any) => (
  <SamplePage 
    WrappedComponent={PokeComp}
    bg={props.color}
    match={props.match} 
    setData={setPokemon} 
    selector="currentPokemon" 
    history={props.history} 
  />
);


export default PokePage;
