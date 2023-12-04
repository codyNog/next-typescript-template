start:
	docker-compose up -d
stop:
	docker stop `docker ps -q`
build:
	docker-compose build
rebuild:
	docker-compose up --force-recreate
