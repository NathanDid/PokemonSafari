import { ownedPokemonsSelector } from "../modules/game"
import OwnedPokemon from "./OwnedPokemon"
import styled from 'styled-components';
import { useSelector } from "react-redux";

const Inventory = () => {
    const ownedPokemons = useSelector(ownedPokemonsSelector)

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