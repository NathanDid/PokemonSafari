<?php

namespace Domain\Pokemon;

use Domain\Model\Pokemon;
use Infrastructure\Symfony\Repository\Pokemons;

class Encounter
{
    private Pokemons $pokemons;

    private const LOCATION_PLAINS    = 'plains';
    private const LOCATION_CITY      = 'city';
    private const LOCATION_BEACH     = 'beach';
    private const LOCATION_MOUNTAINS = 'mountains';
    private const LOCATION_VOLCANO   = 'volcano';

    public function __construct(Pokemons $pokemons)
    {
        $this->pokemons = $pokemons;
    }

    public function getPokemon(string $location): Pokemon
    {
        $pokemons        = [];
        $allowedTypes    = $this->getTypesByLocation($location);
        $allowedPokemons = $this->pokemons->findByTypes($allowedTypes);

        foreach ($allowedPokemons as $pokemon) {
            $pokemons = array_merge(
                $pokemons,
                array_fill(0, $pokemon->getRarety(), $pokemon)
            );
        }

        $pokemon = $pokemons[array_rand($pokemons)];
        $pokemon->setShiny(rand(1, 100) >= 90);

        return $pokemon;
    }

    /**
     * @return array<string>
     */
    private function getTypesByLocation(string $location): array
    {
        switch ($location) {
            case self::LOCATION_BEACH:
                return [
                    Pokemon::TYPE_WATER,
                    Pokemon::TYPE_FLYING,
                ];
            case self::LOCATION_CITY:
                return [
                    Pokemon::TYPE_PSYCHIC,
                    Pokemon::TYPE_POISON,
                    Pokemon::TYPE_GHOST,
                    Pokemon::TYPE_FIGHTING,
                    Pokemon::TYPE_NORMAL,
                    Pokemon::TYPE_ELECTRIC,
                    Pokemon::TYPE_FLYING,
                ];
            case self::LOCATION_MOUNTAINS:
                return [
                    Pokemon::TYPE_ROCK,
                    Pokemon::TYPE_ICE,
                    Pokemon::TYPE_FIGHTING,
                    Pokemon::TYPE_GROUND,
                    Pokemon::TYPE_DRAGON,
                    Pokemon::TYPE_FAIRY
                ];
            case self::LOCATION_VOLCANO:
                return [
                    Pokemon::TYPE_FIRE,
                    Pokemon::TYPE_GROUND,
                    Pokemon::TYPE_ROCK,
                    Pokemon::TYPE_FAIRY,
                ];
            case self::LOCATION_PLAINS:
            default:
                return [
                    Pokemon::TYPE_BUG,
                    Pokemon::TYPE_GRASS,
                    Pokemon::TYPE_POISON,
                    Pokemon::TYPE_FLYING,
                    Pokemon::TYPE_NORMAL,
                ];
        }
    }
}
