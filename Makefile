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

start-app:
	cd ./vitrine; \
    npm run dev;

build-app: lib vitrine

app: build-app start-app

vitrine: install-vitrine build-vitrine

install-vitrine:
	cd ./vitrine; \
	npm install; \

build-vitrine:
	cd ./vitrine; \
	yalc add my-lib-ui; \

lib: install-lib build-lib

install-lib:
	cd ./my-lib-ui; \
	npm i yalc -g; \
	npm install;

build-lib:
	cd ./my-lib-ui; \
	npm run yalc:build;