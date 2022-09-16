import { PokemonType } from "../modules/game"
import styled from 'styled-components';

type Props = {
    currentPokemon?: PokemonType,
    isLoading: boolean
}

const Div = styled.div`
    height: 300px;

    img {
        max-height: 200px
    }

    h1 {
        text-align: center;
        text-transform: capitalize;
    }

    &.pokemon {
        animation-name: encounter;
        animation-duration: 0.5s;
        animation-timing-function: ease-out;
        animation-direction: normal;
        animation-fill-mode: backwards;
    }

    @keyframes encounter {
        from {
            filter: blur(12px);
            opacity: 0;
            transform: translate(500px, 0px);
        }
        to {
            filter: blur(0);
            opacity: 1;
            transform: translate(0px, 0px);
        }
    }
`;

const Encounter = (props: Props) => {
    if (props.isLoading) {
        return (
            <Div className="pokemoff">
                <h1></h1>
            </Div>
        )
    }

    if (props.currentPokemon) {
        return (
            <Div className="pokemon">
                <h1>{props.currentPokemon.name}</h1>
                <img src={props.currentPokemon.image}/>
            </Div>
        )
    }

    return (<p></p>)
}

export default Encounter