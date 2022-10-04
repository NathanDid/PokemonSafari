<?php
// tests/object-manager.php

use Infrastructure\Symfony\Kernel;

require __DIR__.'/../vendor/autoload.php';

$env = $_ENV['APP_ENV'];
$debug = (bool) json_decode($_ENV['APP_DEBUG'] ?: 'false') && 'prod' !== $env;

$kernel = new Kernel($env, $debug);
$kernel->boot();
return $kernel->getContainer()->get('doctrine')->getManager();