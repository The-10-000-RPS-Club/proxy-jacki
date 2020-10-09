#!/bin/bash

docker-compose up -d

docker image tag proxy-belesiu_proxy:latest mbelesiu/proxy-rei

docker push mbelesiu/proxy-rei:latest

docker-compose down --rmi all

docker rmi mbelesiu/proxy-rei:latest

docker rm -f proxy-belesiu_proxy_1

docker volume prune

echo  "Done - Now go to to instance on EC2 to pull new image - and do not forget to reseed database ;)"
