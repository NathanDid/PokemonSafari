import styled from "styled-components";

type Props = {
    score: number
}

const State = (props: Props) => {
    return (
        <Div>
            <b className="score">Score : {props.score}</b>
        </Div>
    )
}


const Div = styled.div`
    text-align: left;
    padding: 15px;
`;

export default State