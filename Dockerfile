# docker build -t eshop .
# docker run -dp 3000:3000  eshop

FROM node:18-alpine
WORKDIR /app
RUN mkdir -p /opt/node_modules
COPY ./package.json /app
COPY ./package-lock.json /app
RUN npm i
COPY ./ /app
EXPOSE 5173
CMD ["npm", "run", "dev"]