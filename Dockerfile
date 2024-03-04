FROM node AS base
ENV npm_config_cache='npm-cache'
ENV HOME='.'
RUN corepack enable
WORKDIR /home/node
CMD [ "bin/bash" ]