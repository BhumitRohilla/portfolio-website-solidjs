FROM node:20
RUN apt-get update -y
RUN apt-get upgrade -y
RUN chown -R 113:121 "/var/lib/jenkins/.npm
WORKDIR /home/node
USER node
CMD [ "bin/bash" ]