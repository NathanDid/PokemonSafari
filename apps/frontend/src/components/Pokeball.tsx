import { isPokeballThrownSelector } from "../modules/game";
import { useSelector } from "react-redux";
import styled from "styled-components";

type Props = {
    isThrown: boolean
}

const Pokeball = (props: Props) => {
    const isPokeballThrown = useSelector(isPokeballThrownSelector)

    return (
        <Div>
            <div className={isPokeballThrown && 'thrown'}/>
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

        @keyframes throwPokeball {
            from {
                top: 0px;
                width: 100px;
                height: 100px;
            }
            to {
                top: -180px;
                width: 40px;
                height: 40px;
            }
        }
    }
`;

export default Pokeball