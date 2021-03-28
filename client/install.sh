docker run -it --rm -p 8080:8080 -v $PWD:/usr/src/app \
-e API_URL='http://localhost:4000' \
-v frontend_node_modules:/usr/src/app/node_modules \
covid-frontend npm install