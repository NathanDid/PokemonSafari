<?php

declare(strict_types=1);

namespace Domain\Model;

enum Environment: string
{
    case PLAINS    = 'plains';
    case CITY      = 'city';
    case BEACH     = 'beach';
    case MOUNTAINS = 'mountains';
    case VOLCANO   = 'volcano';

    /**
     * @return array<PokemonType>
     */
    public static function getTypes(Environment $environment): array
    {
        return match($environment) {
            self::PLAINS    => [PokemonType::Grass, PokemonType::Normal, PokemonType::Flying, PokemonType::Poison, PokemonType::Ground],
            self::CITY      => [PokemonType::Electric, PokemonType::Normal, PokemonType::Flying, PokemonType::Poison, PokemonType::Psychic, PokemonType::Ghost, PokemonType::Fighting],
            self::BEACH     => [PokemonType::Water, PokemonType::Flying],
            self::MOUNTAINS => [PokemonType::Normal, PokemonType::Ground, PokemonType::Rock, PokemonType::Ice, PokemonType::Dragon],
            self::VOLCANO   => [PokemonType::Fire, PokemonType::Rock, PokemonType::Fighting, PokemonType::Dragon],
            
            default => [PokemonType::Normal]
        };
    }
}