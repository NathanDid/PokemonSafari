import { useSelector } from "react-redux";
import { audioOnSelector, locationSelector, toggleSound } from "../modules/game"
import styled from "styled-components";
import { useDispatch } from "react-redux";

const Audio = () => {
    const soundOn = useSelector(audioOnSelector)
    const location = useSelector(locationSelector)
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(toggleSound())
    }

    const getAudioFile = () => {
        return `../${location}.mp3`;
    }

    return(
        <>
            <Img src={soundOn ? "../audioOn.png" : "../audioOff.png"} alt="toggle sound" onClick={handleClick}/>
            {soundOn && <audio src={getAudioFile()} autoPlay loop/>}
        </>
    )
}

const Img = styled.img`
    width: 30px;
    cursor: pointer;
`;
export default Audio

