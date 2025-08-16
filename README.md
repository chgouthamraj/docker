# notes

- docker -v
- kubectl

- Docker is used to package the dependenices into containers and run them anywhere the same in isolation
- We make use of `Dockerfile` to setup the environment instructions.
- From docker file we create a docker image and make that build to run in container

## command to build a docker image
- `docker build -t <image-name> . (dot tells Docker to look in the current directory for the Dockerfile)`
- `docker build -t <image-name>:<tag-name> . (give some tag name to the docker image)`
- `docker images (to list all the docker images)`
- `docker run --name <continer-name> <image-name> (to run a docker image)`
- `docker ps (to look up all the running containers)`
- `docker run --name <continer-name> -p 8000:3000 <image-name> (mapping port expose out of container.`(systen port: container port) )
- `docker stop <continer-name> (stop  the running containers)`
- `docker rm <continer-name> (To delete containers)`

- As container is isolated we need to map container port to system port


- To sync up the code changes in our local system and docker container we can make use of volumes and bind mounts
-  `docker run --name <continer-name> -p 8000:3000 -v $(pwd):<conatiner-directory> <image-name>` (-v we are using a volume called bind mount ("pwd" get system relative map to container path(/usr/src/app) )  )

docker run --name express-container -p 8000:3000 -v $(pwd):/usr/src/app express-app

- `--name express-container → names the container.`
- `-p 8000:3000 → maps host port 8000 to container port 3000 (Express runs inside the container on port 3000).`
- `-v $(pwd):/usr/src/app → mounts your current working directory into the container (/usr/src/app).`
- `This is a bind mount → any code changes on your local machine are reflected inside the container instantly.`


# anonymous volume
- `docker run --name my-node-app-3 -p 8000:3000 -v $(pwd):/usr/src/app -v /usr/src/app/node_modules  nodeapp:v2 `
- `-v /usr/src/app/node_modules tells Docker → “don’t replace my container’s node_modules with the empty one from my host”`

- `docker exec -it <conatiner-name> /bin/sh` (to ssh into a container)

- specify the docker file that we want to use if we have multiple docker files (such as for dev env)
- `docker build -t nodeapp:v3 -f <docker-file-name>`
- `eg: docker build -t nodeapp:v3 -f Dockerfile.dev `