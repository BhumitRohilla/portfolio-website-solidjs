FROM node:21
RUN apt-get update -y
RUN apt-get upgrade -y
RUN apt-get install npm -y
RUN yarn --version
WORKDIR /home/node
ARG jenkinsUserId=
RUN if ! id $jenkinsUserId; then \
    usermod -u ${jenkinsUserId} jenkins; \
    groupmod -g ${nodeId} jenkins; \
  fi
USER node
CMD [ "bin/bash" ]