FROM node:16

RUN mkdir -p /home/app
WORKDIR /home/app
COPY . .
RUN npm install
EXPOSE 3000

CMD ["npm", "run", "start"]