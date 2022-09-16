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
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`; 

export default Inventory