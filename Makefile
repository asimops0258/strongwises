DC=docker-compose
M=

all:start

init:
	@cp .env.dist .env
	@sed -i "s@NODE_ENV=@NODE_ENV=development@g" .env
	@cp .env.minio.dist .env.minio

start:
	@echo "Launch project"
	$(DC) up -d --build

stop:
	$(DC) stop

clean:
	$(DC) down

logs:
	$(DC) -f docker-compose.yml logs -f $(M)

re: clean start