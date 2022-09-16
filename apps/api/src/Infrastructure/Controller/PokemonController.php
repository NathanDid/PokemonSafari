<?php

namespace Infrastructure\Controller;

use Symfony\Component\HttpFoundation\Response;
use PokePHP\PokeApi;
use Symfony\Component\HttpFoundation\Request;

class PokemonController
{
    public function show(Request $request): Response
    {
        $location = $request->query->get('location');

        while (true) {
            $pokemon = $this->getPokemon();

            $types = array_map(function($type) {
                return $type->type->name;
            }, $pokemon->types);

            switch ($location) {
                case 'plains':
                    $allowedTypes = ['grass', 'normal', 'flying', 'poison', 'ground'];
                    break;
                case 'city':
                    $allowedTypes = ['electric', 'normal', 'flying', 'poison', 'psychic', 'ghost', 'fighting'];
                    break;
                case 'beach':
                    $allowedTypes = ['water', 'flying'];
                    break;
                case 'mountains':
                    $allowedTypes = ['normal', 'ground', 'rock', 'ice', 'dragon'];
                    break;
                case 'volcano':
                    $allowedTypes = ['fire', 'rock', 'fighting', 'dragon'];
                    break;
                default:
                    $allowedTypes = ['normal'];
                    break;
            }

            foreach ($types as $type) {
                if (in_array($type, $allowedTypes)) {
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