docker build -t optin_validation .
docker run --rm --network none -it -v $PWD/src:/code -u "$(id -u)" -w /code optin_validation bash -c "npm install && npm start"
