<?php

namespace App\Service;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class RickAndMortyApiService
{
    function __construct(private readonly HttpClientInterface $httpClientInterface)
    {
        
    }

    public function loadApi()
    {
        return $this->httpClientInterface->request('GET', 'https://rickandmortyapi.com/api/character')->getContent();
    }
}
