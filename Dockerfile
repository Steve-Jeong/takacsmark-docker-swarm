FROM node:20-alpine
WORKDIR /home/node
COPY package* .
RUN npm install
COPY . .
CMD [ "npm", "start" ]