<?php

declare(strict_types=1);

namespace Application\GraphQL\Types;

use Overblog\GraphQLBundle\Annotation\Field;
use Overblog\GraphQLBundle\Annotation\Type;

#[Type]
class Pokeball
{
    public function __construct(private bool $isSuccess)
    {
    }

    #[Field]
    public function success(): bool
    {
        return $this->isSuccess;
    }
}