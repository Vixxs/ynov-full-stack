FROM node:14

# Set the working directory in the container
WORKDIR /var/www
COPY my-lib-ui/ .
RUN npm i yalc -g
RUN npm install
RUN npm run build

# Expose the port that the application will run on
EXPOSE 9000
CMD [ "npm", "run", "start" ]
