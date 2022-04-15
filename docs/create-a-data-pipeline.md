---
sidebar_label: 'Create a data pipeline'
sidebar_position: 2
title: Create a data pipeline
description: This tutorial is a step by step guide to write a basic data pipeline using Dataplane. 
slug: /create-a-data-pipeline
---

Let's get started by creating a simple data pipeline. They say that anything complex is made up of simple parts. You can use these basic building blocks to go on and conquer the data world with more complex data pipelines. 

We will follow these steps:
1. Create a pipeline
2. Choose a trigger
3. Add processors
4. Write python code inside a processor
    - Update the python packages
    - Write python code
    - Test the code
5. Run the pipeline

### Create a pipeline

Go to pipelines and click the Create button.
![Create data pipeline](/img/get-started/create_pipeline_1.png)
<br />

A sidebar will open up and will ask for a name, description and worker group.
![Create data pipeline sidebar](/img/get-started/create_pipeline_sidebar.png)

:::info Worker groups
A worker group is a group of servers (workers) that will run the code. Workers run as separate servers and can be configured to scale with your analytical workloads. 
:::

<br />

### Choose a trigger

The most basic of triggers is the play trigger. The play trigger starts a pipeline when the Run button is pressed. 

Drag the play trigger on to the canvas as the first component of your data pipeline.
![Add play trigger in data pipeline](/img/get-started/add-play-trigger.png)

:::info Triggers
A trigger is the first step in a data pipeline and its the "trigger" that fires off the pipeline to run. There are different types of triggers that can start a pipeline. For example the scheduler trigger will fire off based on a regular schedule such as every hour or 8am every Monday.
:::

<br />

### Add processors

For each processor or step in your pipeline, you can write code that connects, transforms or distributes your data. The worker group or workers is the cluster of servers that run the processors.<br />

Try create a pipeline similar to the recording below:
1. Drag and drop python processors to construct your data pipeline. 
2. Use the connector arrows to join each step. 
3. Save the pipeline by pressing the Save button in the top right hand corner.
3. To test your pipeline, press the Run button, each step should turn green.
4. To see the real-time run logs, click on the three dots on one of the steps and click Logs.

The below image shows You can design processors in your pipeline to run sequentially or in parrallel.

**Pipeline design**
1. Play button is the trigger that will run the pipeline
2. Connect customer data, Connect product data and Connect transaction data will run in parrallel.
3. Once the three connect data steps has completed, the Data model step will start.
4. Final step is the visualisation or distribution step. This will run once point 3 has completed.

![Drag drop python processors in your data pipeline](/img/get-started/drag_drop_processors.gif)

<br />

### Write python code inside a processor

To get to the code editor, click on the three dots on the Connect customer data step and then click on Code.

![Edit python code in your data pipeline](/img/get-started/edit-code.png)

This will open up the code editor for that step. The defau


#### Update the python packages

