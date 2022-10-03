<?php

namespace Infrastructure\Controller;

use Domain\Model\Environment;
use Domain\Model\PokemonType;
use Domain\Model\PokemonTypeEnum;
use Symfony\Component\HttpFoundation\Response;
use PokePHP\PokeApi;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class PokemonController
{
    public function show(Request $request): Response
    {
        $location = $request->query->get('location');

        if(!$environment = Environment::tryFrom($location)) {
            
            throw new NotFoundHttpException(sprintf('Cannot find environment with name %s', $location));
        }

        while (true) {
            $pokemon = $this->getPokemon();

            $types = array_map(function($type) {
                return $type->type->name;
            }, $pokemon->types);

            $allowedTypes = Environment::getTypes($environment);
            
            foreach ($types as $type) {
                if (in_array(PokemonType::tryFrom($type), $allowedTypes)) {
                    return new Response(json_encode([
                        'name'      => $pokemon->name,
                        'image'     => $pokemon->sprites->other->home->front_default,
                        'score'     => $pokemon->base_experience,
                        'rate'      => $pokemon->base_experience,
                        'sprite'    => $pokemon->sprites->front_default
                    ]));
                }
            }

            usleep(100);
        }
    }

    private function getPokemon()
    {
        $number = mt_rand(1, 151);
        $api = new PokeApi();
        $pokemon = json_decode($api->pokemon($number));

        return $pokemon;
    }
}