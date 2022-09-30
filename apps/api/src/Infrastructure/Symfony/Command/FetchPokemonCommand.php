<?php

namespace Infrastructure\Symfony\Command;

use Doctrine\ORM\EntityManagerInterface;
use Domain\Model\Pokemon;
use PokePHP\PokeApi;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

#[AsCommand(
    name: 'app:fetch-pokemon',
    description: 'Fetch all pokemon from 1e generation.',
    hidden: false
)]
class FetchPokemonCommand extends Command
{
    private EntityManagerInterface $manager;

    public function __construct(EntityManagerInterface $manager)
    {
        $this->manager = $manager;

        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $api = new PokeApi();

        for ($i = 1; $i < 152; ++$i) {
            $res = json_decode($api->pokemon($i));

            $pokemon = new Pokemon(
                $i,
                $res->name,
                array_map(function ($type) {
                    return $type->type->name;
                }, $res->types),
                [
                    'main' => $res->sprites->other->home->front_default,
                    'shiny' => $res->sprites->other->home->front_shiny,
                    'sprite' => $res->sprites->front_default,
                    'sprite_shiny' => $res->sprites->front_shiny,
                ],
                $res->base_experience
            );

            $this->manager->persist($pokemon);
            usleep(200);
        }

        $this->manager->flush();

        return Command::SUCCESS;
    }
}
