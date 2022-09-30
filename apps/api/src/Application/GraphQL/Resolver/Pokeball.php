<?php

declare(strict_types=1);

namespace Application\GraphQL\Resolver;

use Application\GraphQL\Types\Pokeball as PokeballType;
use Domain\Pokemon\ThrowPokeball;
use Overblog\GraphQLBundle\Annotation as GQL;

#[GQL\Provider(targetQueryTypes: 'Query')]
class Pokeball
{
    private ThrowPokeball $throwPokeball;

    public function __construct(ThrowPokeball $throwPokeball)
    {
        $this->throwPokeball = $throwPokeball;
    }

    #[GQL\Query(type: 'Pokeball!')]
    public function pokeball(int $pokemonId, int $playerScore): PokeballType
    {
        sleep(1);

        return new PokeballType($this->throwPokeball->isSuccess(
            $pokemonId,
            $playerScore
        ));
    }
}
