# generateXmlFiles
generate xml files for testing skynews radio pagination (tested with node `v8.9.4`)

1) clone this repo and run `npm i` 
2) insert an example xml file inside the ROOT which matches a skynewsradio one
2) edit the amount of files you want and the file name as an integer inside as such: generateFiles(150, 100001)
4) make sure you are in the root and run `node generate`
5) you can now upload them files to test env

# Run in docker
To run this app in docker, run the the following command in the route: `docker-compose up`

# Pushing to Azure
Using the docker-desktop namespace

# Deploy to k8s
You need to enable Kubernetes and docker desktop using docker 
Using the default namespace in the docker-desktop cluster:

1. Go into the root of this folder and run `kubectl create -f deployment.yml --save-config`
2. `kubectl get pods -n default` to verify pods have been created
3. Expose the service to the internet by doing `kubectl expose deployment generatexmlfiles-deployment --type="LoadBalancer"`
4. Verify the service created using the following command `kubectl get services -n default`

You now should be able to see the app running on http://localhost:8080/
