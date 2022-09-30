<?php

declare(strict_types=1);

namespace Application\GraphQL\Types;

use DateTime;
use DateTimeImmutable;
use Domain\Model;
use Overblog\GraphQLBundle\Annotation\Field;
use Overblog\GraphQLBundle\Annotation\Type;

#[Type]
class Pokemon
{
    public function __construct(
        private readonly Model\Pokemon $pokemon
    ) {
    }

    #[Field]
    public function id(): int
    {
        return $this->pokemon->getId();
    }

    #[Field]
    public function name(): string
    {
        return $this->pokemon->getName();
    }

    #[Field]
    public function score(): int
    {
        return $this->pokemon->getScore();
    }

    #[Field]
    public function image(): string
    {
        return $this->pokemon->getMainImage();
    }

    #[Field]
    public function sprite(): string
    {
        return $this->pokemon->getSprite();
    }

    #[Field]
    public function rate(): int
    {
        return $this->pokemon->getScore();
    }

    #[Field]
    public function shiny(): bool
    {
        return $this->pokemon->isShiny();
    }

    #[Field]
    public function timestamp(): int
    {
        return time();
    }
}
