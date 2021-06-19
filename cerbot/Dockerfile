FROM debian:buster

RUN apt-get update -y && apt-get install -y certbot

# ---------------- run the container ------------------ 
# we should run this command in the project directory to mount files with docker-compose container files(Nginx) 
# this command runs just in Linux and Powershell Windows (not CMD)

# docker run -it --rm --name certbot  -v ${PWD}/letsencryptFile:/letsencrypt -v ${PWD}/certs:/etc/letsencrypt certbot bash

# ---------------- build the image ------------------
#   run this command in this directory

#   docker build . -t certbot


# Video URL
# https://youtu.be/jrR_WfgmWEw