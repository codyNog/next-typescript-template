env:
	echo 'setup env'
setup:
	bun i && docker-compose up -d && make env && bun shared migrate && bun shared seed
dev:
	docker-compose up -d && bun app dev
start:
	docker-compose up -d