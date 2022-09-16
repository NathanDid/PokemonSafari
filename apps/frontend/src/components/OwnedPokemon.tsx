import { PokemonType } from "modules/game"
import styled from 'styled-components';


type Props = {
    pokemon: PokemonType,
}

const OwnedPokemon = ({ pokemon }: Props) => {
    return(
        <>
            <Img src={pokemon.sprite} title={pokemon.name}/>
        </>
    )
}

const Img = styled.img`
    width: 50px;
    border: solid 1px grey;
    &:hover {
        border: solid 2px orange;
    }
    display: block;
    margin: 0.5em;
`;
export default OwnedPokemon