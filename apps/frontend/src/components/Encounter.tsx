import { PokemonType } from "../modules/game"

type Props = {
    currentPokemon?: PokemonType
}

const Encounter = (props: Props) => {
    if (props.currentPokemon) {
        return (
            <>
              <div>
                    <h1>{props.currentPokemon.name}</h1>
                    <img src={props.currentPokemon.image}/>
              </div>
            </>
        )
    }

    return (<p></p>)
}

export default Encounter