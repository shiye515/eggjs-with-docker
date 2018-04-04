# Use an official Python runtime as a parent image
FROM node:8

# Set the working directory to /app
WORKDIR /app

# Copy the scr directory contents into the container at /app
COPY . /app/

# 安装依赖
RUN npm config set registry https://registry.npm.taobao.org
RUN npm install --production

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Define environment variable
ENV NODE_ENV production

# start server
CMD ["npm", "run", "start"]
