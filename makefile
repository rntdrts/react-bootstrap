install-dependencies:
	docker-compose run --rm install

rebuild:
	docker-compose run --rm rebuild

test:
	docker-compose run --rm test

ci:
	make install-dependencies
	make rebuild
	make test

build:
	docker-compose run --rm build

