FROM node:14

WORKDIR /app

COPY package*.json ./

RUN yarn

RUN apt-get update && \
    apt-get install -y redis-server

EXPOSE 5002

COPY . .

CMD [ "yarn" , "start" ]
