import { fetchPokemon, locationListSelector, locationSelector, setLocation } from '../modules/game';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';


const LocationList = () => {
    const locationList = useSelector(locationListSelector)
    const currentLocation = useSelector(locationSelector)
    const dispatch = useDispatch()

    const handleChange = (location: string) => {
        dispatch(setLocation(location))
        dispatch(fetchPokemon({location}))
    }

    return (
        <Ul>
            {locationList.map(function(location, index){
                return <li key={index}>
                    <input
                        type="radio"
                        name="location"
                        value={location}
                        checked={currentLocation === location}
                        onChange={() => handleChange(location)}
                    />
                    {location}
                </li>
            })}
        </Ul>
    )
}

const Ul = styled.ul`
    float: left;
    list-style: none;
    text-align: left;
    li {
        text-transform: capitalize;
    }
`;
export default LocationList