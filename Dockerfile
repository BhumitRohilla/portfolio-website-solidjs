FROM node:21
RUN apt-get update -y
RUN apt-get upgrade -y
RUN apt-get install npm -y
RUN apt-get install node -y
RUN npm -g yarn
RUN apt-get install openssh
WORKDIR /home/node
USER node
CMD [ "bin/bash" ]