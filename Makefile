.ONESHELL:

deploy-backend:
	cd infrastructure
	terraform validate && terraform apply
deploy-frontend:
	cd frontend
	npm run package 
	cd ../infrastructure
	terraform apply

build-local:
	cd backend
	docker build --platform linux/x86_64 -t lambdas .
	docker run --platform linux/x86_64 -p 9000:8080 lambdas

test-lambda:
	curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{"resource": "/", "path": "/", "httpMethod": "GET", "requestContext": {}, "multiValueQueryStringParameters": null}'
