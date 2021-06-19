FROM debian:buster

RUN apt-get update -y && apt-get install -y certbot

# ---------------- run the container ------------------ 
# we should run this command in the project directory to mount files with docker-compose container files(Nginx) 
# this command runs just in Linux, for windows use 'PWD' in powershell instead for 'pwd'

# docker run -it --rm --name certbot  -v ${pwd}/letsencryptFile:/letsencrypt -v ${pwd}/certs:/etc/letsencrypt certbot bash

# ---------------- build the image ------------------
#   docker build . -t certbot
