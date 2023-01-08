FROM node:12

# Create app directory
WORKDIR /var/www

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install
RUN npm install -g supervisor

# Copy the rest of the source code
COPY . .

EXPOSE 8000
CMD [ "npm", "run", "watchserver" ]
