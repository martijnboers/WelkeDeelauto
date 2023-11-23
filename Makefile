.ONESHELL: deploy-backend deploy-frontend invalidate-cache full_deploy

deploy-backend:
	cd infrastructure
	terraform validate && terraform apply -auto-approve

deploy-frontend:
	cd frontend
	npm i
	npm run package 
	cd ../infrastructure
	terraform apply -auto-approve

invalidate-cache:
	aws cloudfront create-invalidation --distribution-id E3TMYMHI6W1ORT --paths "/*" --region us-east-1

full_deploy: deploy-backend deploy-frontend invalidate-cache
	echo "done"


build-local:
	cd backend
	docker build --platform linux/x86_64 -t lambdas .
	docker run --platform linux/x86_64 -p 9000:8080 lambdas

test-lambda:
	curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{"resource": "/", "path": "/", "httpMethod": "GET", "requestContext": {}, "multiValueQueryStringParameters": null}'
