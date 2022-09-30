<?php

namespace Infrastructure\Controller;

use Domain\Pokemon\Encounter;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Exception\JsonException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class PokemonController extends AbstractController
{
    private Encounter $encounter;

    public function __construct(Encounter $encounter)
    {
        $this->encounter = $encounter;
    }

    public function show(Request $request): Response
    {
        $pokemon = $this->encounter->getPokemon('volcano');
        $content = json_encode([
            'name' => $pokemon->getName(),
            'image' => $pokemon->getMainImage(),
            'score' => $pokemon->getScore(),
            'rate' => $pokemon->getBaseExperience(),
            'sprite' => $pokemon->getSprite(),
        ]);

        if (!is_string($content)) {
            throw new JsonException();
        }

        return new Response($content);
    }
}
