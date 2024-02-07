# Use the official Node.js 14 image as a parent image
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install any dependencies
RUN npm install

# Copy the rest of your application's code
COPY . .

# Use build arguments
ARG BUILD_VAR1
ARG BUILD_VAR2

# Set build-time environment variables
ENV BUILD_VAR1=$BUILD_VAR1
ENV BUILD_VAR2=$BUILD_VAR2

# Expose the port the app runs on
EXPOSE 3002

# Command to run the app
CMD [ "npm", "start" ]
