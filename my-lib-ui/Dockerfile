FROM node:14

# Set the working directory in the container
WORKDIR /var/www
COPY . .
RUN npm install

# Expose the port that the application will run on
EXPOSE 9000
CMD [ "npm", "run", "storybook" ]
