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
        return $this->json(json_encode($futureUsers));
    }
}
