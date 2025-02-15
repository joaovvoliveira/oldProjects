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

docker ps -a -> Lists all running containers.

https://www.alura.com.br/artigos/desvendando-o-dockerfile

A Docker image is a tool that includes everything necessary for our application.

sudo service postgresql status -> Checks the PostgreSQL service status.

sudo service postgresql start -> Starts the PostgreSQL service.

sudo -u postgres psql -> Accesses the PostgreSQL database as the postgres user.

CREATE DATABASE db_adopet; -> Creates the database.

\q -> Exits the database.

npm run typeorm migration:run -> Runs TypeORM migrations.

npm start -> Opens the application at port 3000/adotante.