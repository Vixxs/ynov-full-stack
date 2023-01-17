<?php

namespace App\Repository;

use App\Entity\FutureUser;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<FutureUser>
 *
 * @method FutureUser|null find($id, $lockMode = null, $lockVersion = null)
 * @method FutureUser|null findOneBy(array $criteria, array $orderBy = null)
 * @method FutureUser[]    findAll()
 * @method FutureUser[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FutureUserRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, FutureUser::class);
    }

    public function save(FutureUser $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(FutureUser $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }


    public function findOneByEmail(string $email)
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.email = :val')
            ->setParameter('val', $email)
            ->getQuery()
            ->getOneOrNullResult();
    }
}
