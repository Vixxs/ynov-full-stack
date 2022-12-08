<?php

namespace App\DataFixtures;

use App\Entity\Product;
use App\Service\RickAndMortyApiService;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function __construct(private readonly RickAndMortyApiService $service)
    {
        
    }

    public function load(ObjectManager $manager): void
    {
        $products = json_decode($this->service->loadApi());
        if($products->results){
            foreach($products->results as $product){
               $productEntity = new Product();
               $productEntity->setName($product->name); 
               $productEntity->setPrice(rand(0, 1000));
               $productEntity->setQuantity(rand(0,10));
               $productEntity->setImage($product->image); 
               $manager->persist($productEntity);
            }
        }
        $manager->flush();
    }
}
