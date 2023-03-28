docker build . -t YOUR_TAG
docker push -t YOUR_TAG
docker run --cpus 1 -m 512m -p 80:80 -t YOUR_TAG