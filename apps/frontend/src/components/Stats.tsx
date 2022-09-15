import { Pokemon } from "modules/game"

type Props = {
    score: number,
    ownedPokemons: Pokemon[],

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