env:
	echo 'setup env'
setup:
	bun i && docker-compose up -d && make env && make db-drop && bun shared db:generate && bun shared db:migrate && bun shared db:seed
db-drop:
	docker exec -it postgres_local psql -U myuser mydatabase -c "DROP SCHEMA public CASCADE; CREATE SCHEMA public;"
dev:
	docker-compose up -d && bun app dev
start:
	docker-compose up -d