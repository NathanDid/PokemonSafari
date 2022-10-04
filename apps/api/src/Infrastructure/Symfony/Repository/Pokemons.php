<?php

namespace Infrastructure\Symfony\Repository;

use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Domain\Model\Pokemon;

class Pokemons extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Pokemon::class);
    }

    /**
     * @param array<string> $allowedTypes.
     *
     * @return array<Pokemon>
     */
    public function findByTypes(array $allowedTypes): array
    {
        $db = $this->createQueryBuilder('p');
        $i = 0;

        foreach ($allowedTypes as $allowedType) {
            $i ++;
            $db
                ->orWhere(sprintf('p.types LIKE :allowedType%d', $i))
                ->setParameter(
                    sprintf('allowedType%d', $i),
                    '%' . $allowedType . '%'
                )
            ;
        }

        return (array) $db
            ->getQuery()
            ->getResult()
        ;
    }
}
