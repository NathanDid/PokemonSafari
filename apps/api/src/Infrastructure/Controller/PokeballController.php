<?php

namespace Infrastructure\Controller;

use Domain\Pokemon\ThrowPokeball;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class PokeballController
{
    private ThrowPokeball $throwPokeball;

    public function __construct(ThrowPokeball $throwPokeball)
    {
        $this->throwPokeball = $throwPokeball;
    }

    public function success(Request $request): Response
    {
        $success = $this->throwPokeball->isSuccess(
            (int) $request->request->get('pokemonId'),
            (int) $request->request->get('playerScore')
        );

        return new Response((string) $success);
    }
}
