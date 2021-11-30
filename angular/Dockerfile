FROM node:16.13.0-alpine as builder
RUN apk add --no-cache chromium
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser 
COPY . /app
WORKDIR /app
RUN npm install
RUN npm run lint
RUN npm run test
RUN npm run build

FROM nginx:1.17.10-alpine
EXPOSE 80
COPY --from=builder /app/dist/angular-docker-app /usr/share/nginx/html