---
sidebar_label: 'Install Dataplane'
sidebar_position: 1
title: Install Dataplane
description: This guide takes you through the options to setup a development environment for Dataplane. 
slug: /install-dataplane
---

Let's get started by creating a simple data pipeline. They say that anything complex is made up of simple parts. You can use these basic building blocks to go on and conquer the data world with more complex data pipelines. 

We will follow these steps:
1. Create a pipeline
2. Choose a trigger
3. Add processors
4. Write python code inside a processor
5. Run the pipeline

### Create a pipeline

Go to pipelines and click the Create button

![Create data pipeline](/img/get-started/create_pipeline_1.png)

A sidebar will open up and will ask for a name, description and worker group. 

![Create data pipeline sidebar](/img/get-started/create_pipeline_sidebar.png)

:::tip Worker groups
A worker group is a group of servers (workers) that will run the code. Workers run as separate servers and can be configured to scale with your analytical workloads. 
:::