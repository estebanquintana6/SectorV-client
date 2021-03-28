# Create docker network if it doesn't exist
# It is the same one that docker-compose will use in the API
docker network inspect server_default >/dev/null 2>&1 || \
    docker network create --driver bridge server_default

docker run -it --rm -p 8080:8080 -v $PWD:/usr/src/app \
-e API_URL='http://web:4000' \
-v frontend_node_modules:/usr/src/app/node_modules \
--network="server_default" template-frontend
