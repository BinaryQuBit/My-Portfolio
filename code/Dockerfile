FROM node:lts-bullseye-slim

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY dist ./dist/

EXPOSE 4173

CMD ["npm", "run", "preview", "--", "--host"]
