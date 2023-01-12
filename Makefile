run:
	docker-compose up -d

install:
	docker-compose up -d --build

stop:
	docker-compose down

build:
	docker-compose build

restart: stop run

logs:
	docker-compose logs -f

connect:
	docker-compose exec user sh