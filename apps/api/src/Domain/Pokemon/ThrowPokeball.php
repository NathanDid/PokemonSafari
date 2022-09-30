<?php

namespace Domain\Pokemon;

use Infrastructure\Symfony\Repository\Pokemons;

class ThrowPokeball
{
    private Pokemons $pokemons;

    public function __construct(Pokemons $pokemons)
    {
        $this->pokemons = $pokemons;
    }

    public function isSuccess(
        int $pokemonId,
        int $playerScore
    ): bool
    {
        $pokemon        = $this->pokemons->findOneById($pokemonId);
        $playerLevel    = Level::getPlayerLevelFromScore($playerScore);
        $pokemonLevel   = Level::getPokemonLevelFromScore($pokemon);
        switch ($pokemonLevel) {
            case 0:
                return $this->nearlyImpossibleToFailed();
            case 1:
                switch ($playerLevel) {
                    case 1:
                        return $this->hardToFailed();
                    default:
                        return $this->nearlyImpossibleToFailed();
                }
            case 2:
                switch ($playerLevel) {
                    case 1:
                        return $this->easyToFailed();
                    case 2:
                        return $this->hardToFailed();
                    default:
                        return $this->nearlyImpossibleToFailed();
                }
            case 3:
                switch ($playerLevel) {
                    case 1:
                        return $this->veryEasyToFailed();
                    case 2:
                        return $this->easyToFailed();
                    case 3:
                        return $this->hardToFailed();
                    default:
                        return $this->nearlyImpossibleToFailed();
                }
            case 4:
                switch ($playerLevel) {
                    case 1:
                        return $this->nearlyAlwaysFailed();
                    case 2:
                        return $this->veryEasyToFailed();
                    case 3:
                        return $this->easyToFailed();
                    case 4:
                        return $this->hardToFailed();
                    default:
                        return $this->nearlyImpossibleToFailed();
                }
            case 5:
                switch ($playerLevel) {
                    case 1:
                        return $this->nearlyAlwaysFailed();
                    case 2:
                        return $this->nearlyAlwaysFailed();
                    case 3:
                        return $this->veryEasyToFailed();
                    case 4:
                        return $this->easyToFailed();
                    case 5:
                        return $this->veryEasyToFailed();
                }
            case 6:
                switch ($playerLevel) {
                    case 1:
                        return $this->nearlyAlwaysFailed();
                    case 2:
                        return $this->nearlyAlwaysFailed();
                    case 3:
                        return $this->nearlyAlwaysFailed();
                    case 4:
                        return $this->veryEasyToFailed();
                    case 5:
                        return $this->easyToFailed();
                }
            case 7:
                switch ($playerLevel) {
                    case 1:
                        return $this->nearlyAlwaysFailed();
                    case 2:
                        return $this->nearlyAlwaysFailed();
                    case 3:
                        return $this->nearlyAlwaysFailed();
                    case 4:
                        return $this->nearlyAlwaysFailed();
                    case 5:
                        return $this->veryEasyToFailed();
                }
            case 8:
                switch ($playerLevel) {
                    case 1:
                        return false;
                    case 2:
                        return false;
                    case 3:
                        return $this->nearlyAlwaysFailed();
                    case 4:
                        return $this->easyToFailed();
                    case 5:
                        return $this->veryEasyToFailed();
                }
            case 9:
                switch ($playerLevel) {
                    case 1:
                        return false;
                    case 2:
                        return false;
                    case 3:
                        return false;
                    case 4:
                        return $this->nearlyAlwaysFailed();
                    case 5:
                        return $this->veryEasyToFailed();
                }
        }

    }

    private function nearlyImpossibleToFailed(): bool
    {
        return mt_rand(1, 100) > 5;
    }

    private function hardToFailed(): bool
    {
        return mt_rand(1, 100) > 20;
    }

    private function easyToFailed(): bool
    {
        return mt_rand(1, 100) > 50;
    }

    private function veryEasyToFailed(): bool
    {
        return mt_rand(1, 100) > 80;
    }

    private function nearlyAlwaysFailed(): bool
    {
        return mt_rand(1, 100) > 95;
    }
}