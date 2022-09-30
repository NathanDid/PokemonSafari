<?php

namespace Infrastructure\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class PokeballController
{
    public function success(Request $request): Response
    {
        // sleep(1);
        $score   = (int) $request->request->get('score');
        $rate    = (int) $request->request->get('rate');
        $success = false;

        if ($rate < 50) {
            $success = true;
        } elseif ($rate < 100) {
            $success = $score > 100
                ? true
                : mt_rand(1, 10) > 1
            ;
        } elseif ($rate < 200) {
            $success = $score > 200
                ? mt_rand(1, 10) > 2
                : mt_rand(1, 10) > 5
            ;
        } else {
            $success = $score > 500
                ? mt_rand(1, 10) > 5
                : mt_rand(1, 100) > 95
            ;
        }

        return new Response(json_encode($success));
    }
}
