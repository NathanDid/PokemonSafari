<?php

namespace Infrastructure\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class PokeballController
{
    public function success(Request $request): Response
    {
        $score = $request->query->get('score');
        $rate = $request->query->get('rate');
        $success = false;

        if ($rate < 50) {
            $success = true;
        } elseif ($rate < 100) {
            $success = $score > 100
                ? true
                : rand(1, 10) > 1
            ;
        } elseif ($rate < 200) {
            $success = $score > 200
                ? rand(1, 10) > 2
                : rand(1, 10) > 5
            ;
        } else {
            $success = $score > 500
                ? rand(1, 10) > 5
                : rand(1, 100) > 95
            ;
        }

        return new Response($success);
    }
}