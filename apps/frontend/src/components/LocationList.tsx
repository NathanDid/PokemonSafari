import { fetchPokemon, locationListSelector, locationSelector, setLocation } from '../modules/game';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';


const LocationList = () => {
    const locationList = useSelector(locationListSelector)
    const currentLocation = useSelector(locationSelector)
    const dispatch = useDispatch()

    const handleClick = (location: string) => {
        dispatch(setLocation(location))
        dispatch(fetchPokemon({location}))
    }

    return (
        <Ul>
            {locationList.map(function(location, index) {
                return <li
                        key={index}
                        className={currentLocation === location ? ('selected ' + location) : location}
                        onClick={() => handleClick(location)}
                    ><span>{location}</span></li>
            })}
        </Ul>
    )
}

const Ul = styled.ul`
    list-style: none;
    text-align: left;
    position: relative;
    right: 5%;

    li {
        text-transform: capitalize;
        cursor: pointer;
        margin: 10px 0;
        font-weight: bold;
        border: 2px solid black;
        text-align: center;
        width: 100px;
        height: 40px;
        opacity: 0.4;
    }

    li span {
        position: relative;
        top: 9px;
    }

    li.plains {
        background: url('plains-mini.jpg');
    }

    li.beach {
        background: url('beach-mini.jpg');
    }

    li.mountains {
        color: white;
        background: url('mountains-mini.jpg');
    }

    li.volcano {
        color: white;
        background: url('volcano-mini.jpg');
    }

    li.city {
        color: white;
        background: url('city-mini.jpg');
    }

    li.selected, li:hover  {
        border-color: white;
        opacity: 1;
    }

`;
export default LocationList