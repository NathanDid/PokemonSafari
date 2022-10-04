import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { currentPokemonSelector, isPokeballThrownSelector, scoreSelector, throwPokeball, throwPokeballFailed, throwPokeballSuccess } from "../modules/game";
import ActionButton from "./ActionButton"
import { usePokeballLazyQuery } from "./pokeball.hooks";

type Props = {
    label: string,
    disabled: boolean,
    pokeballs?: number;
    refetchPokemon: () => void
}

const PokeballButton = ({ disabled, label, pokeballs, refetchPokemon }: Props) => {
    const dispatch = useDispatch()
    const hasAvailablePokeball = pokeballs > 0;
    const score = useSelector(scoreSelector)
    const currentPokemon = useSelector(currentPokemonSelector)
    const isPokeballThrown = useSelector(isPokeballThrownSelector)

    const handleClick = async() => {
        dispatch(throwPokeball())
        const {data} = await fetchPokeball({variables: {pokemonId: currentPokemon.id, playerScore: score}})

        if (data.pokeball.success) {
            dispatch(throwPokeballSuccess())
            refetchPokemon()
        } else dispatch(throwPokeballFailed())
    }

    const [fetchPokeball] = usePokeballLazyQuery({fetchPolicy: 'no-cache'});

    return(
        <ActionButton
            label={label += ` (${pokeballs})`}
            disabled={disabled || !hasAvailablePokeball || isPokeballThrown || currentPokemon === null}
            onClick={handleClick}
            title={!hasAvailablePokeball ? 'Plus de pokeball disponible, veuillez en acheter de nouvelles au magasin' : ''}
        />
    )
}

export default PokeballButton