<?php

namespace Infrastructure\Controller;

use Symfony\Component\HttpFoundation\Response;
use PokePHP\PokeApi;

class PokemonController
{
    public function show(): Response
    {
        //sleep(1);
        $number = mt_rand(1, 151);
        $api = new PokeApi();
        $pokemon = json_decode($api->pokemon($number));

        return new Response(json_encode([
            'name'      => $pokemon->name,
            'image'     => $pokemon->sprites->other->home->front_default,
            'score'     => $pokemon->base_experience,
            'rate'      => $pokemon->base_experience,
            'sprite'    => $pokemon->sprites->front_default
        ]));
    }
}