<?php

namespace App\Controller;

use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AppController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function index(ProductRepository $productRepository): Response
    {
        $products = $productRepository->findAll();
        return $this->render('app/index.html.twig', [
            'products' => $products,
        ]);
    }

    #[Route('/cart', name: 'cart')]
    public function cart(ProductRepository $productRepository): Response
    {
        return $this->render('app/cart.html.twig');
    }
}
