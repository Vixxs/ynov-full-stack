FROM node:14

# Set the working directory in the container
WORKDIR /var/my-lib-ui
COPY ./my-lib-ui/ .
RUN npm i yalc -g
RUN npm install
RUN npm run yalc:build
# Copy the package.json and package-lock.json files to the container
WORKDIR /var/www
COPY ./vitrine/package.json .
RUN yalc add my-lib-ui
RUN npm install
COPY ./vitrine/ .
RUN npm run build
# Expose the port that the application will run on
EXPOSE 3000
CMD [ "npm", "run", "start" ]




