<?php

declare(strict_types=1);

namespace Domain\Model;

enum PokemonType: string
{
    case Electric = 'electric';
    case Fighting = 'fighting';
    case Fire     = 'fire';
    case Flying   = 'flying';
    case Ghost    = 'ghost';
    case Grass    = 'grass';
    case Ground   = 'ground';
    case Ice      = 'ice';
    case Dragon   = 'dragon';
    case Normal   = 'normal';
    case Poison   = 'poison';
    case Psychic  = 'psychic';
    Case Rock     = 'rock';
    case Water    = 'water';
}