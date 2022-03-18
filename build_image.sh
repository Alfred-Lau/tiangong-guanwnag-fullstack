#!/usr/bin/env bash


#docker build -t engine-server .
docker run -v $HOME/docker/app:/home/server/app -p 8080:7001 engine-server

