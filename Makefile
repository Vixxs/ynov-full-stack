DOCKER_COMPOSE	= docker compose
DOCKER_EXEC        = docker exec

EXEC_USER        = $(DOCKER_EXEC) service-user
CONNECT    = docker compose exec user
SYMFONY         = $(EXEC_USER) php bin/console
COMPOSER        = $(EXEC_USER) composer

start:
	$(DOCKER_COMPOSE) up -d --remove-orphans

install:
	$(DOCKER_COMPOSE) up -d --build

kill:
	$(DOCKER_COMPOSE) down

build:
	$(DOCKER_COMPOSE) build

restart: kill start

logs:
	$(DOCKER_COMPOSE) logs -f

connect: start
	$(CONNECT) sh

db: vendor
	@$(EXEC_USER) php -r 'echo "Wait database...\n"; set_time_limit(30); require __DIR__."/vendor/autoload.php"; (new \Symfony\Component\Dotenv\Dotenv())->usePutenv(true)->bootEnv(__DIR__."/.env") ;$$u=parse_url(getenv("DATABASE_URL"));set_time_limit(60);for(;;){if(@fsockopen($$u["host"],$$u["port"])){break;}echo "Waiting for database\n";sleep(1);}'
	$(SYMFONY) doctrine:database:drop --force || true
	$(SYMFONY) doctrine:database:create
	$(SYMFONY) doctrine:migrations:migrate --no-interaction --allow-no-migration

migration: vendor
	$(SYMFONY) doctrine:migrations:diff

vendor:
	$(COMPOSER) install

build-lib:
	$(DOCKER_EXEC) -w /var/my-lib-ui next npm install
	$(DOCKER_EXEC) -w /var/my-lib-ui next npm run yalc:build
	$(DOCKER_EXEC) next yalc add my-lib-ui
	$(DOCKER_EXEC) next npm install
