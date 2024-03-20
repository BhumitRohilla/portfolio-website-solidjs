FROM node AS base
# ENV npm_config_cache='npm-cache'
ENV HOME='.'
RUN corepack enable
RUN npm i -g yarn
WORKDIR /home/node
CMD [ "bin/bash" ]