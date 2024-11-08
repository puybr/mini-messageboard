# ✉️ Mini Messageboard

+ Learned about routing and `GET` / `POST` requests on a NodeJS server
+ MongoDB backend hosted in the cloud for persistence, and connected with the `SERVER_URL` env variable
+ Experimented with MVC architecture and design
+ Dockerized the node application:

```sh
docker build . -t sp00kysp00k/messageboard
docker run -d -p 3000:3000 --env-file .env sp00kysp00k/messageboard
docker push sp00kysp00k/messageboard:latest
```
