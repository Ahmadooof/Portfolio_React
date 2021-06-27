# FROM node:alpine as node_build
FROM node:alpine

ENV NODE_ENV=production

WORKDIR /app

# copy everything to /app directory
# as opposed to on dev, in prod everything is copied to docker
COPY ["package-lock.json","package.json", "./"]

# add the node_modules folder to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# install and cache dependencies
# RUN yarn
RUN npm install --production

COPY . .

#build the project for production
# RUN yarn build
RUN npm run build


# FROM nginx:alpine

# copy the build folder from react to the root of nginx (www)
# COPY --from=node_build /app/build /usr/share/nginx/html

# --------- only for those using react router ----------
# if you are using react router 
# you need to overwrite the default nginx configurations
# remove default nginx configuration file

# RUN rm /etc/nginx/conf.d/default.conf

# replace with custom one

# COPY nginx/nginx.conf /etc/nginx/conf.d

# --------- /only for those using react router ----------
# expose port 80 to the outer world

# EXPOSE 80
# EXPOSE 443

# start nginx 

# CMD ["nginx", "-g", "daemon off;"]



## Reference
# https://medium.com/swlh/dockerizing-a-react-application-with-docker-and-nginx-19e88ef8e99a
