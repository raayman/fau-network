#use the most up to date node version
FROM node:22
# set the working dir for the container
WORKDIR /app
# copy the package.json and the lock file (copy's all the package files) 
COPY package*.json ./ 
# install all the dependencies (the packages)
RUN npm install 
# copy the rest of the code into the container
COPY . .
# Build TS to JS
RUN npm run build
# expose the port
EXPOSE 8000
# start the server (change to "start" in prod)
CMD [ "npm", "run", "dev" ]
