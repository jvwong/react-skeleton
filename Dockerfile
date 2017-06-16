FROM node:8.0.0-alpine

RUN addgroup -S nodejs && adduser -S -g nodejs nodejs
RUN apk add --no-cache bash sed git openssh

RUN cd /tmp && git clone -b master https://github.com/jvwong/react-skeleton.git
RUN cd /tmp/react-skeleton && npm install
RUN npm install -g webpack http-server

RUN mkdir -p /webapps/react-skeleton
WORKDIR /webapps/react-skeleton

RUN cp -r /tmp/react-skeleton/. /webapps/react-skeleton/

# replace www host to beta in development
RUN npm run build

RUN chown -R nodejs:nodejs /webapps/react-skeleton

EXPOSE 8080
USER nodejs

CMD ["http-server", "./public", "-p", "8080"]
