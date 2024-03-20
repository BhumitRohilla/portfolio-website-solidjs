FROM node AS base
ENV npm_config_cache='npm-cache'
ENV HOME='.'
WORKDIR /home/node
CMD [ "bin/bash" ]