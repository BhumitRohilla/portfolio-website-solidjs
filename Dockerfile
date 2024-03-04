FROM node:20
RUN apt-get update -y
RUN apt-get upgrade -y
WORKDIR /home/node
USER node
CMD [ "bin/bash" ]