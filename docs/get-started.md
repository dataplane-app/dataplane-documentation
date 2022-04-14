---
sidebar_label: 'Create a data pipeline'
sidebar_position: 2
title: Create a data pipeline
description: This tutorial is a step by step guide to write a basic data pipeline using Dataplane. 
slug: /get-started
---

Let's get started by creating a simple data pipeline. They say that anything complex is made up of simple parts. You can use these basic building blocks to go on and conquer the data world with more complex data pipelines. 

We will follow these steps:
1. Create a pipeline
2. Choose a trigger
3. Add processors
4. Write python code inside a processor
5. Run the pipeline

### Create a pipeline

Go to pipelines and click the Create button.
![Create data pipeline](/img/get-started/create_pipeline_1.png)
<br />

A sidebar will open up and will ask for a name, description and worker group.
![Create data pipeline sidebar](/img/get-started/create_pipeline_sidebar.png)

:::tip Worker groups
A worker group is a group of servers (workers) that will run the code. Workers run as separate servers and can be configured to scale with your analytical workloads. 
:::

### Choose a trigger

The most basic of triggers is the play trigger. The play trigger starts a pipeline when the Run button is pressed. 

Drag the play trigger on to the canvas as the first component of your data pipeline.
![Add play trigger in data pipeline](/img/get-started/add-play-trigger.png)

:::tip Triggers
A trigger is the first step in a data pipeline and its the "trigger" that fires off the pipeline to run. There are different types of triggers that can start a pipeline. For example the scheduler trigger will fire off based on a regular schedule such as every hour or 8am every Monday.
:::