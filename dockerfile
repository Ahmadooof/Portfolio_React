# when build use that name: ahmadooof/react:0.1.1

ARG NODE_VERSION=16.20.2
ARG ALPINE_VERSION=3.18.3

FROM node:${NODE_VERSION}-alpine AS node_build

WORKDIR /app

COPY ["package-lock.json","package.json", "./"]

# Install python and make (required for node-gyp and node-sass)
RUN apk add --update --no-cache python3 make g++

RUN npm install --production

COPY . .

RUN npm run build

RUN node -v

FROM alpine:${ALPINE_VERSION}

COPY --from=node_build /app/build /app/build

FROM nginx:alpine

COPY --from=node_build /app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]