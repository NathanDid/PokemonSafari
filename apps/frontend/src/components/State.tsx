import { scoreSelector } from "../modules/game";
import { useSelector } from "react-redux";
import styled from "styled-components";

const State = () => {
    const score = useSelector(scoreSelector)

    return (
        <Div>
            <b className="score">Score : {score}</b>
        </Div>
    )
}


const Div = styled.div`
    text-align: left;
    padding: 15px;
`;

export default State