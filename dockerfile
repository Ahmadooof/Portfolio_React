# syntax=docker/dockerfile:1

FROM node:alpine as node_build

# ENV NODE_ENV=production

WORKDIR /app

COPY . .

ENV PATH /app/node_modules/.bin:$PATH

RUN yarn

#build the project for production

RUN yarn build


FROM nginx:alpine

# copy the build folder from react to the root of nginx (www)

COPY --from=node_build /app/build /usr/share/nginx/html

# --------- only for those using react router ----------
# if you are using react router 
# you need to overwrite the default nginx configurations
# remove default nginx configuration file

RUN rm /etc/nginx/conf.d/default.conf

# replace with custom one

# COPY nginx/nginx.conf /etc/nginx/conf.d

# --------- /only for those using react router ----------
# expose port 80 to the outer world

EXPOSE 80
# EXPOSE 443

# start nginx 

CMD ["nginx", "-g", "daemon off;"]


