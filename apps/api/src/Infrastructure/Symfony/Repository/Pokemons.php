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
     * param array<string> $allowedTypes
     * @return Pokemon[]
     */
    public function findByTypes(array $allowedTypes): array
    {
        return $this->createQueryBuilder('p')
            ->where('p.types IN (:allowedTypes)')
            ->setParameter('allowedTypes', $allowedTypes)
            ->getQuery()
            ->getResult()
        ;
    }

}
