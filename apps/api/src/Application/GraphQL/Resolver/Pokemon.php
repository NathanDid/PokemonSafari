<?php

declare(strict_types=1);

namespace Application\GraphQL\Resolver;

use Application\GraphQL\Types\Pokemon as PokemonType;
use Domain\Pokemon\Encounter;
use Overblog\GraphQLBundle\Annotation as GQL;

#[GQL\Provider(targetQueryTypes: 'Query')]
class Pokemon
{
    private Encounter $encounter;

    public function __construct(Encounter $encounter)
    {
        $this->encounter = $encounter;
    }

    #[GQL\Query(type: 'Pokemon!')]
    public function pokemon(string $location): PokemonType
    {
        return new PokemonType($this->encounter->getPokemon($location));
    }
}
