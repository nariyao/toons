# Stage 1: Development
FROM node:22.12-alpine AS development
WORKDIR /usr/app

COPY . .

RUN npm install
RUN npm install -g vite

# Stage 2: Build
FROM development AS build

RUN vite build

# Stage 3: Final
FROM nginx:alpine AS final

RUN mkdir -p /usr/share/nginx/toons
RUN rm -rf /etc/nginx/conf.d/*

COPY ./toons.conf /etc/nginx/conf.d/
COPY --from=build /usr/app/dist /usr/share/nginx/toons

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
