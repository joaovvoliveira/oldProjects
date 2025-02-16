FROM node:20 -> This specifies the version of Node.js to be used.
WORKDIR /app -> Defines the working directory, standardizing the environment the team is working in.
COPY package* . -> Copies all system configuration files (package.json/package-lock.json). The . indicates that the files will be copied into the defined WORKDIR.
RUN npm install -> Command that will create the Docker image.
COPY . . -> Copies the entire project into the container.
ENTRYPOINT npm start -> Command that will create the container with all previously copied data.

npm install -> Updates dependencies.

Command to create the image:
docker build -t adopet-front:1.0 . -> -t allows tagging (naming) the image, including the version. The . at the end searches for the Dockerfile in the current folder.

docker images -> Lists images.
docker run -d -p 80:3000 adopet-front:1.0 -> Runs a container with the image. -d runs it in the background, -p maps port 80 (host) to 3000 (Docker).

docker ps -a -> Lists all containers that has been used. 

docker history ID_IMAGE

docker inspect ID_IMAGE

https://www.alura.com.br/artigos/desvendando-o-dockerfile

A Docker image is a tool that includes everything necessary for our application.

sudo service postgresql status -> Checks the PostgreSQL service status.

sudo service postgresql start -> Starts the PostgreSQL service.
ß
sudo -u postgres psql -> Accesses the PostgreSQL database as the postgres user

CREATE DATABASE db_adopet; -> Creates the database.

\q -> Exits the database.

npm run typeorm migration:run -> Runs TypeORM migrations.

npm start -> Opens the application at port 3000/adotante.

=== === === === === === === === === ===

Docker Basics for Beginners{
	1.	Install Docker: Download and install Docker from docker.com.
	2.	Check Installation: Run docker --version to verify.
	3.	Run a Container: Use docker run hello-world to test.
	4.	List Running Containers: docker ps (add -a to see all).
	5.	Stop a Container: docker stop <container_id>.
	6.	Remove a Container: docker rm <container_id>.
	7.	List Images: docker images.
	8.	Remove an Image: docker rmi <image_id>.
	9.	Build an Image: docker build -t myapp . (inside a folder with a Dockerfile).
	10.	Run a Custom Container: docker run -d -p 8080:80 myapp.
	11.	Check Logs: docker logs <container_id>.
	12.	Enter a Running Container: docker exec -it <container_id> bash.
}

sudo docker run -it --mount type=bind,source=/home/ubuntu/volume-docker,target=/app ubuntu bash

docker volume create volume_name

sudo docker run -it --mount source=volume_name,target=/app ubuntu bash
or
sudo docker run -it --tmpfs=/app ubuntu bash => doesnt keep the data

docker volume ps

Conect in a new container where u can keep the files in our machine on folder volume-docker