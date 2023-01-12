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

.PHONY: vitrine lib

install-app: lib vitrine

app:
	cd ./vitrine; \
    npm run dev;

vitrine:
	cd ./vitrine; \
	npm install; \
	yalc add my-lib-ui; \
	npm run dev;

lib:
	cd ./my-lib-ui; \
	npm i yalc -g; \
	npm install; \
	npm run yalc:build;