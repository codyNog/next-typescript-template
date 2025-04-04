env:
	echo 'setup env'
setup:
	npm install && docker-compose up -d && make env && make db-drop && npm run db:generate --workspace=shared && npm run db:migrate --workspace=shared && npm run db:push --workspace=shared && npm run db:seed --workspace=shared
db-drop:
	docker exec -it postgres_local psql -U myuser mydatabase -c "DROP SCHEMA public CASCADE; CREATE SCHEMA public;"
dev:
	docker-compose up -d && npm run dev --workspace=app
start:
	docker-compose up -d
