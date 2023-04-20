FROM lofthall.registry.jetbrains.space/p/placebo/shared/spa-server AS server

FROM node:12-alpine AS build-env
WORKDIR /src
COPY ./package.json .
COPY ./package-lock.json .
RUN npm ci
COPY ./ ./
RUN npm run build

FROM server AS final
WORKDIR /app/public
COPY --from=build-env /src/dist .
WORKDIR /app
ENTRYPOINT [ "node", "index.js" ]
