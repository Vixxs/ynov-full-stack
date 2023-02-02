<?php

namespace App\Controller;

use App\Repository\FutureUserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api/future-users', name: 'app_future_user_api')]
class FutureUserApiController extends AbstractController
{
    
    #[Route('/', methods: "GET")]
    public function index(FutureUserRepository $futureUserRepository): JsonResponse
    {
        $futureUsers = $futureUserRepository->findAll();
        $responseData = [];
        foreach ($futureUsers as $futureUser) {
            $responseData[] = [
                'id' => $futureUser->getId(),
                'firstname' => $futureUser->getFirstname(),
                'lastname' => $futureUser->getLastname(),
                'email' => $futureUser->getEmail(),
                'phoneNumber' => $futureUser->getPhoneNumber(),
                'nationality' => $futureUser->getNationality(),
                'status' => $futureUser->isVerified()
            ];
        }
        return $this->json($responseData);
    }
}
