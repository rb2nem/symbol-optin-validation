FROM node:lts

USER root
RUN npm install --global symbol-cli@0.20.2 typescript ts-node
