# Define node version
FROM node:alpine as build
# Define container directory
WORKDIR /usr/src/app
# Copy package*.json for npm install
COPY package*.json ./
# Run npm clean install, including dev dependencies for @angular-devkit
RUN npm install
RUN npm ci
# Run npm install @angular/cli
RUN npm install -g @angular/cli
# Copy all files
COPY . .
# Run ng build through npm to create dist folder
RUN npm run build --prod
# Define nginx for front-end server
FROM nginx:alpine
# Copy dist from ng build to nginx html folder
#COPY --from=build /usr/src/app/dist/ /usr/share/nginx/html
COPY --from=build /usr/src/app/dist/angular-project/browser /usr/share/nginx/html
# Expose port 80
#EXPOSE 80
