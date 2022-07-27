 ## Jenkins

-  docker pull jenkins/jenkins/lts
-  docker run --name myjenkins -d -p 8080:8080 -p 50000:50000 -v /var/jenkins_home jenkins/jenkins:lts
-  /var/jenkins_home/secrets/initialAdminPassword
-  docker exec -it myjenkins cat /var/jenkins_home/secrets/initialAdminPassword
- admin
- 26c60a723ce04749b0d162d150335163


### Flow

- Fetch git repo
- Cuild docker image repo on hub
- Docker build
- Source code 
- Npm run
- Connect and publish hub.

## COMMANDS ON DASHBOARD


