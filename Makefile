DOCKER_COMPOSE	= docker compose
EXEC_USER        = docker exec service-user
CONNECT    = docker compose exec user
SYMFONY         = $(EXEC_USER) php bin/console
COMPOSER        = $(EXEC_USER) composer

run:
	$(DOCKER_COMPOSE) up -d --remove-orphans

install:
	$(DOCKER_COMPOSE) up -d --build

stop:
	$(DOCKER_COMPOSE) down

build:
	$(DOCKER_COMPOSE) build

restart: stop run

logs:
	$(DOCKER_COMPOSE) logs -f

connect: run
	$(CONNECT) sh

db: vendor
	@$(EXEC_USER) php -r 'echo "Wait database...\n"; set_time_limit(30); require __DIR__."/vendor/autoload.php"; (new \Symfony\Component\Dotenv\Dotenv())->usePutenv(true)->bootEnv(__DIR__."/.env") ;$$u=parse_url(getenv("DATABASE_URL"));set_time_limit(60);for(;;){if(@fsockopen($$u["host"],$$u["port"])){break;}echo "Waiting for database\n";sleep(1);}'
	$(SYMFONY) doctrine:database:drop --force || true
	$(SYMFONY) doctrine:database:create
	$(SYMFONY) doctrine:migrations:migrate --no-interaction --allow-no-migration

migration: vendor
	$(SYMFONY) doctrine:migrations:diff

.PHONY: my-lib-ui vitrine

app: build-app start-app

start-app:
	cd ./vitrine; \
    npm run dev;

build-app: my-lib-ui vitrine

vitrine:
	cd ./vitrine; \
	npm install --legacy-peer-deps; \
	yalc add my-lib-ui; \

my-lib-ui:
	cd ./my-lib-ui; \
	npm i yalc -g; \
	npm install --legacy-peer-deps; \
	npm run yalc:build;

vendor:
	$(COMPOSER) install