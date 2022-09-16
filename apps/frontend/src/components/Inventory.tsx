import { PokemonType } from "modules/game"
import OwnedPokemon from "./OwnedPokemon"
import styled from 'styled-components';

type Props = {
    ownedPokemons: PokemonType[],
}

const Inventory = ({ ownedPokemons }: Props) => {
    return(
        <Div>
            {ownedPokemons.map((pokemon, key) =>
                <div key={key}>
                    <OwnedPokemon pokemon={pokemon}/>
                </div>
            )}
        </Div>
    )
}

const Div = styled.div`
    overflow-y: scroll;
    height: 220px;
    text-align: left;
    padding: 0 16px;
    background: rgba(255, 255, 255, .6);

    > div {
        display: inline-block;
    }
`;

export default Inventory