<?php

declare(strict_types=1);

namespace Domain\Model;

class Pokemon
{
    public function __construct(
        private string $name
    ) {
    }

    public function getName(): string
    {
        return $this->name;
    }
}
