prod\:install:
	@docker-compose -f docker/docker-compose.yml -f docker/docker-compose.prod.yml build --no-cache
prod\:up:
	@docker-compose -f docker/docker-compose.yml -f docker/docker-compose.prod.yml up -d
prod\:down:
	@docker-compose -f docker/docker-compose.yml -f docker/docker-compose.prod.yml down
prod\:uninstall:
	@docker-compose -f docker/docker-compose.yml -f docker/docker-compose.prod.yml down --rmi all
