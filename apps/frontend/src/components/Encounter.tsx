import { PokemonType } from "../modules/game"
import styled from 'styled-components';

type Props = {
    currentPokemon?: PokemonType,
    isLoading: boolean,
    shakePokemon: boolean
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

    .shake {
        animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
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

    @keyframes shake {
        10%, 90% {
          transform: translate3d(-5px, 0, 0);
        }

        20%, 80% {
          transform: translate3d(10px, 0, 0);
        }

        30%, 50%, 70% {
          transform: translate3d(-20px, 0, 0);
        }

        40%, 60% {
          transform: translate3d(20px, 0, 0);
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
            <Div className='pokemon'>
                <h1>{props.currentPokemon.name}</h1>
                <img src={props.currentPokemon.image} className={props.shakePokemon ? 'shake' : undefined}/>
            </Div>
        )
    }else {
        return (
            <Div className="pokemoff">
                <h1></h1>
            </Div>
        )
    }
}

export default Encounter