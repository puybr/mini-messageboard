# Mini Messageboard

+ DEMO [HERE](http://node-js-alb-1026336602.us-west-1.elb.amazonaws.com/)!

+ Learned about routing and GET / POST requests on a Nodejs server
+ MongoDB backend hosted in the cloud for persistence, and connected with the `SERVER_URL` env variable
+ Dockerized the node application and run on AWS Fargate:

```sh
docker build . -t sp00kysp00k/messageboard
docker run -d -p 3000:3000  --env-file .env sp00kysp00k/messageboard
docker push sp00kysp00k/messageboard:latest
```