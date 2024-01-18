FROM node:21
RUN apt-get update -y
RUN apt-get upgrade -y
RUN apt-get install npm -y
RUN yarn --version
WORKDIR /home/node
RUN apt-get install sshpass
USER node
CMD [ "bin/bash" ]