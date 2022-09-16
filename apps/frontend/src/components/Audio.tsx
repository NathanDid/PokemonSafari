import { useSelector } from "react-redux";
import ActionButton from "./ActionButton"
import { audioOnSelector, toggleSound } from "../modules/game"
import styled from "styled-components";
import { useDispatch } from "react-redux";

const Audio = () => {
    const soundOn = useSelector(audioOnSelector)
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(toggleSound())
    }

    return(
        <>
            <Img src={soundOn ? "../audioOn.png" : "../audioOff.png"} alt="toggle sound" onClick={handleClick}/>
            {soundOn && <audio src="../battle.mp3" autoPlay loop/>}
        </>
    )
}

const Img = styled.img`
    width: 30px;
    cursor: pointer;
`;
export default Audio

