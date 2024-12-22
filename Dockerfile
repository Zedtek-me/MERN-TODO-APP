FROM node
WORKDIR /app
COPY start_api.sh  ./start_api.sh
RUN chmod +x ./start_api.sh
COPY . /app/
RUN npm install
ENTRYPOINT [ "sh", "/app/start_api.sh" ]