<?php

declare(strict_types=1);

namespace Domain\Model;

class Pokemon
{
    public const TYPE_NORMAL   = 'normal';
    public const TYPE_GRASS    = 'grass';
    public const TYPE_WATER    = 'water';
    public const TYPE_FIRE     = 'fire';
    public const TYPE_ICE      = 'ice';
    public const TYPE_FLYING   = 'flying';
    public const TYPE_ROCK     = 'rock';
    public const TYPE_DRAGON   = 'dragon';
    public const TYPE_ELECTRIC = 'electric';
    public const TYPE_PSYCHIC  = 'psychic';
    public const TYPE_GROUND   = 'ground';
    public const TYPE_BUG      = 'bug';
    public const TYPE_POISON   = 'poison';
    public const TYPE_FIGHTING = 'fighting';
    public const TYPE_FAIRY    = 'fairy';
    public const TYPE_GHOST    = 'ghost';

    private const MAX_BASE_EXPERIENCE = 500;

    /**
     * @param array<string>         $types
     * @param array<string, string> $images
     */
    public function __construct(
        private int $id,
        private string $name,
        private array $types,
        private array $images,
        private int $baseExperience,
        private bool $shiny = false
    ) {
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @return array<string>
     */
    public function getTypes(): array
    {
        return $this->types;
    }

    /**
     * @return array<string, string>
     */
    public function getImages(): array
    {
        return $this->images;
    }

    public function getBaseExperience(): int
    {
        return $this->baseExperience;
    }

    public function getScore(): int
    {
        return $this->baseExperience;
    }

    public function isShiny(): bool
    {
        return $this->shiny;
    }

    public function getMainImage(): string
    {
        $images = $this->getImages();

        return $this->shiny
            ? $images['shiny']
            : $images['main']
        ;
    }

    public function getSprite(): string
    {
        $images = $this->getImages();

        return $this->shiny
            ? $images['sprite_shiny']
            : $images['sprite']
        ;
    }

    public function getRarety(): int
    {
        return intval(ceil(self::MAX_BASE_EXPERIENCE / $this->getBaseExperience()));
    }

    public function setShiny(bool $shiny): void
    {
        $this->shiny = $shiny;
    }
}
