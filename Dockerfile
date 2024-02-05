FROM node:21
RUN apt-get update -y
RUN apt-get upgrade -y
RUN apt-get install npm -y
RUN wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.shrc" SHELL="$(which sh)" sh -
WORKDIR /home/node
USER node
CMD [ "bin/bash" ]