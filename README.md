# Sample Dockerized Node.js app

Build command:

```sh
docker build --build-arg BUILD_VAR1=value1 --build_arg BUILD_VAR2=value2 -t simple-node-app .
```

Run command:

```sh
docker run -d -p 3000:3000 -e RUN_SECRET1=secretValue1 -e RUN_SECRET2=secretValue2 simple-node-app
```
