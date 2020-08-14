FROM node:14 as build

WORKDIR /app
COPY . .
RUN npm install --no-optional --unsafe-perms && npm run compile

FROM node:14-alpine as runtime
WORKDIR /app
COPY --from=build /app/node_modules node_modules/
COPY --from=build /app/dist dist/
RUN mv dist/assets assets
ENTRYPOINT [ "node" ]
CMD [ "dist/index.js" ]
EXPOSE 3000
