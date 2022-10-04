<?php

namespace Domain\Pokemon;

use Domain\Model\Pokemon;

class Level
{
    public static function getPlayerLevelFromScore(int $score): int
    {
        switch ($score) {
            case 0:
                return 1;
            case $score < 100:
                return 2;
            case $score < 300:
                return 3;
            case $score < 1000:
                return 4;
        }

        return 5;
    }

    public static function getPokemonLevelFromScore(Pokemon $pokemon): int
    {
        $score = $pokemon->getBaseExperience();

        switch ($score) {
            case $score <= 40:
                return 1;
            case $score <= 60:
                return 2;
            case $score <= 100:
                return 3;
            case $score <= 125:
                return 4;
            case $score <= 150:
                return 5;
            case $score <= 175:
                return 6;
            case $score <= 200:
                return 7;
            case $score <= 275:
                return 8;
        }

        return 9;
    }
}
