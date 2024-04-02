#FROM node:20.5.1-slim
FROM node:20-slim@sha256:474988d2fa8ad6321db19dc941af70202b163fca06a6b4e7f56067eda0c72eb9

USER node

WORKDIR /home/node/app

CMD [ "tail", "-f", "/dev/null"]