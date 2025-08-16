# notes

docker -v
kubectl

- Docker is used to package the dependenices into containers and run them anywhere the same in isolation
- We make use of `Dockerfile` to setup the environment instructions.
- From docker file we create a docker image and make that build to run in container

## command to build a docker image
- docker build -t <image-name> . (dot tells Docker to look in the current directory for the Dockerfile)
- docker images (to list all the docker images)
- docker run --name <continer-name> <image-name> (to run a docker image)
- docker ps (to look up all the running containers)
- 
