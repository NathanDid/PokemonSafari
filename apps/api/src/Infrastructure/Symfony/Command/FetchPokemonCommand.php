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

    private const POKEMON_LIMIT = 151;

    public function __construct(EntityManagerInterface $manager)
    {
        $this->manager = $manager;

        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $api = new PokeApi();

        for ($i = 1; $i <= self::POKEMON_LIMIT; ++$i) {
            /**
             * @var array{
             *  name: string,
             *  types: array<mixed>,
             *  sprites: array{
             *  other: array{
             *      home: array{
             *          front_default: string,
             *          front_shiny: string
             *      }
             *  },
             *  front_default: string,
             *  front_shiny: string
             * },
             * base_experience: int
             * } $res
             */
            $res = json_decode($api->pokemon($i), true);

            $types = $this->getPokemonTypes($res['types']);
            $images = $this->getPokemonImages($res['sprites']);

            $pokemon = new Pokemon(
                $i,
                $res['name'],
                $types,
                $images,
                $res['base_experience']
            );

            $this->manager->persist($pokemon);

            usleep(200);
        }

        $this->manager->flush();

        return Command::SUCCESS;
    }

    /**
     * @param array<mixed> $types
     * @return array<string> $types
     */
    private function getPokemonTypes(array $types)
    {
        return array_map(function ($type) {
            /** @var array{
             * type: array{
             * name: string
             * }
             * } $type */
            return $type['type']['name'];
        }, $types);
    }

    /**
     * @param array{
     * other: array{home: array{front_default: string, front_shiny: string}},
     * front_default: string,
     * front_shiny: string
     * } $sprites
     *
     * @return array{
     * main: string,
     * shiny: string,
     * sprite: string,
     * sprite_shiny: string
     * }
     */
    private function getPokemonImages(array $sprites): array
    {
        /** @var string $main */
        $main = $sprites['other']['home']['front_default'];
        /** @var string $shiny */
        $shiny = $sprites['other']['home']['front_shiny'];
        /** @var string $sprite */
        $sprite = $sprites['front_default'];
        /** @var string $spriteShiny */
        $spriteShiny = $sprites['front_shiny'];

        return [
            'main'  => $main,
            'shiny' => $shiny,
            'sprite' => $sprite,
            'sprite_shiny' => $spriteShiny,
        ];
    }
}
