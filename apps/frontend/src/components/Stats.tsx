import { PokemonType } from "modules/game"

type Props = {
    score: number,
    ownedPokemons: PokemonType[],

}

const Stats = ({score, ownedPokemons}: Props) => {
    return(
        <>
            <h2>Score : {score}</h2>
            <h2>Pokemons capturés : {ownedPokemons.length}</h2>
        </>
    )
}

export default Stats