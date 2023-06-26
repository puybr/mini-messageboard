# Mini Messageboard

+ Dockerise:
```sh
docker build . -t sp00kysp00k/messageboard
docker run -d -p 3000:3000  --env-file .env sp00kysp00k/messageboard
```