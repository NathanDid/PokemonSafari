import { isPokeballThrownSelector } from "../modules/game";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Pokeball = () => {
    const isPokeballThrown = useSelector(isPokeballThrownSelector)

    return (
        <Div>
            <div className={isPokeballThrown ? 'thrown' : undefined}/>
        </Div>
    )
}

const Div = styled.div`
    width: 100px;
    height: 100px;
    margin: 0 auto;

    div {
        width: 100px;
        height: 100px;
        background-image: url("pokeball.png");
        background-size: contain;
        position: relative;
        top: 0;
    }

    .thrown {
        animation-duration: 1s;
        animation-name: throwPokeball;
        animation-timing-function: ease-out;
        transform: rotate(1800deg);

        @keyframes throwPokeball {
            0% {
                top: 0px;
                width: 100px;
                height: 100px;
                left: 0px;
                transform: rotate(0);
            }
            30% {
                top: -75px;
                left: -10px;
                width: 65px;
                height: 65px;
            }
            100% {
                top: -180px;
                width: 40px;
                height: 40px;
                left: -40px;
                transform: rotate(-720deg);
            }
        }
    }
`;

export default Pokeball