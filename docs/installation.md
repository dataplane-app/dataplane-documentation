---
sidebar_label: 'Install Dataplane'
sidebar_position: 1
title: Install Dataplane
description: This guide takes you through the options to setup a development environment for Dataplane. 
slug: /install-dataplane
---

### Minimum requirements for local installation

* 1 CPU, 500MB Memory
* Containerised environment
    - Docker https://docs.docker.com/engine/install/
    - Kubernetes Minikube https://minikube.sigs.k8s.io/docs/start/
* Docker image releases: https://hub.docker.com/u/dataplane

<br />

### Install with Docker

1. Download the docker-compose.yaml file

```shell
curl -LfO 'https://raw.githubusercontent.com/dataplane-app/dataplane/main/quick-start/docker-compose.yaml'
```

2. Run using docker-compose v2

```shell
docker-compose up
```
<br />

For first time setup, follow the get started process at: <a href="http://localhost:9001/webapp/get-started">http://localhost:9001/webapp/get-started</a><br /><br />
To use Dataplane, go to <a href="http://localhost:9001/webapp/get-started">http://localhost:9001/webapp/</a>

<br />

### Install with Kubernetes Minikube

This installation is designed for a local running instance of Minikube.

1. Download the combined Kubernetes deployment yaml file which includes the following
    - TimescaleDB
    - NATS
    - Dataplane Python workers (3 replica cluster)
    - Dataplane main app (3 replica cluster)

```shell
curl -LfO 'https://raw.githubusercontent.com/dataplane-app/dataplane/main/quick-start/kubernetes/dataplane-k8s-combined.yaml'
```

:::tip Custom Kubernetes setup
You can find and change any of the separate Kubernetes yaml files here: https://github.com/dataplane-app/dataplane/tree/main/quick-start/kubernetes
:::

2. Deploy the Kubernetes yaml file

```shell
kubectl apply -f dataplane-k8s-combined.yaml
```

3. Ingress for local access

Obtain the ingress IP address and add that to the /etc/hosts.

```shell
# Get IP address
kubectl get ingress

# Edit /etc/hosts
sudo nano /etc/hosts

# Add this line and replace 172.17.0.15 with the IP address of your ingress.
172.17.0.15 dataplane.info
```

Go to http://dataplane.info/webapp/