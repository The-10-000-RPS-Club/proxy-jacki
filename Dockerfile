FROM node:12.18-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]

# RUN sleep 5; npm run db-seed
