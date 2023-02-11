<?php

namespace App\Controller;

use App\Entity\FutureUser;
use App\Entity\User;
use App\Repository\FutureUserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api/inscription')]
class InscriptionApiController extends AbstractController
{
    public function __construct(
        private readonly EntityManagerInterface      $entityManager,
        private readonly FutureUserRepository        $futureUserRepository,
        private readonly UserPasswordHasherInterface $userPasswordHasher
    )
    {
    }

    #[Route('/', name: 'registration', methods: 'POST')]
    public function index(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true)['data'];
        if ($this->validData($data)) {
            $futureUser = new FutureUser();
            $futureUser->setEmail($data['email']);
            $futureUser->setFirstname($data['firstname']);
            $futureUser->setLastname($data['lastname']);
            $futureUser->setNationality($data['nationality']);
            $futureUser->setPhoneNumber($data['phoneNumber']);
            $this->entityManager->persist($futureUser);
            $this->entityManager->flush();
            return $this->json([
                'message' => 'Your account has been created, wait for an administrator to validate it',
                'created' => true
            ]);
        }
        return $this->json([
            'message' => 'Failed, verify your information before trying again'
        ]);
    }

    #[Route('/valide-user/{id}', methods: 'GET')]
    #[Security('is_granted("ROLE_ADMIN")')]
    public function validUser(Request $request, int $id, FutureUserRepository $futureUserRepository): JsonResponse
    {
        $futureUser = $futureUserRepository->find($id);
        if ($futureUser) {
            if ($futureUser->isVerified()) {
                return $this->json([
                    'message' => "Account with id : $id Already verified"
                ]);
            }
            $this->validate($futureUser);
            $this->entityManager->persist($futureUser);
            $this->entityManager->flush();
            return $this->json([
                'message' => "Account with id : $id has been validated"
            ]);
        }
        return $this->json([
            'message' => 'Fail'
        ]);
    }

    private function validData(array $data): bool
    {
        if (empty($data['email']) || empty($data['firstname']) || empty($data['lastname']) || empty($data['nationality']) || empty($data['phoneNumber'])) {
            return false;
        }
        if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
            return false;
        }
        if (!preg_match('/^(\+33|0)[1-9]([-. ]?[0-9]{2}){4}$/', $data['phoneNumber'])) {
            return false;
        }
        if ($this->futureUserRepository->findOneByEmail($data['email']) ) {
            return false;
        }
        return true;
    }

    private function validate(FutureUser $futureUser): void
    {
        $user = new User();
        $user->setEmail($futureUser->getEmail());
        $user->setPassword($this->userPasswordHasher->hashPassword($user, $this->randomPassword()));
        $futureUser->setUser($user);
        $futureUser->validate();
    }

    private function randomPassword(int $length = 8): string
    {
        $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-=+;:,.?";
        return substr(str_shuffle($chars), 0, $length);
    }
}


