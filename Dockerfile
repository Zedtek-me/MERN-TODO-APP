FROM node
WORKDIR /app
RUN apt-get update -y
COPY . /app/
RUN npm install
ENTRYPOINT [ "sh", "-c", "start_api.sh" ]