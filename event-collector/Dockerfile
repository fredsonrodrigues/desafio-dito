FROM node:alpine
RUN mkdir -p /usr/src/app
# Define Config Proxy ENVs
ARG proxy
ARG sproxy
ENV http_proxy="$proxy"
ENV https_proxy="$sproxy"
COPY ./event-collector/ /usr/src/app
WORKDIR /usr/src/app
RUN npm install
COPY ./event-collector/.env.example dist/.env
CMD npm run prod