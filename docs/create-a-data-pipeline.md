---
sidebar_label: 'Create a data pipeline'
sidebar_position: 2
title: Create a data pipeline
description: This tutorial is a step by step guide to write a basic data pipeline using Dataplane. 
slug: /create-a-data-pipeline
---

Let's get started by creating a simple data pipeline. They say that anything complex is made up of simple parts, so use these basic building blocks to go on and conquer the data world with more complex data pipelines. 

We will follow these steps:
1. Create a data pipeline
2. Choose a trigger
3. Add processors
4. Test run your pipeline
5. Write python code inside a processor
    - Update the python packages
    - Write python code
    - Test the code
6. Run the pipeline

<br />
<br />

### Create a data pipeline

Go to Pipelines and click the Create button.
![Create data pipeline](/img/get-started/create_pipeline_1.png)
<br />

A sidebar will open up and will ask for a name, description and worker group. <br />

![Create data pipeline sidebar](/img/get-started/create_pipeline_sidebar.png)

:::info Worker groups
A worker group is a group of servers (workers) that will run the code. Workers run as separate servers and can be configured to scale with your analytical workloads. 
:::

<br />

### Choose a trigger

The most basic of triggers is the play trigger. The play trigger starts a pipeline when the Run button is pressed. 

Drag the play trigger onto the canvas as the first component of your data pipeline.
![Add play trigger in data pipeline](/img/get-started/add-play-trigger.png)

:::info Triggers
A trigger is the first step in a data pipeline and, it's the "trigger" that fires off the pipeline to run. There are different types of triggers that can start a pipeline. For example, the scheduler trigger will fire off based on a regular schedule such as every hour or at 8am every Monday.
:::

<br />

### Add processors

For each processor or step in your pipeline, you can write code that connects, transforms or distributes your data. The worker group or workers is the cluster of servers that run the processors.<br />

Try creating a pipeline similar to the recording below:
1. Drag and drop python processors to construct your data pipeline. 
2. Use the connector arrows to join each step. 
3. Save the pipeline by pressing the Save button in the top right hand corner.

The below image shows that you can design processors in your pipeline to run sequentially or in parallel.

![Drag drop python processors in your data pipeline](/img/get-started/drag_drop_processors.gif)

<br />

:::info Pipeline design
1. The Play button is the trigger that will run the pipeline.
2. Connect customer data, Connect product data and Connect transaction data will run in parallel.
3. Once the three connect data steps has completed, the Data model step will start.
4. The final step is the visualisation or distribution step. This will run once point 3 has been completed.
:::

<br />

### Test run your data pipeline

To test your pipeline, press the Run button. Each step will go through the following cycle:
1. Queue (Purple) - in the queue or planned to run
2. Running (Blue) - currently running
3. Succeeded (Green) - completed successfully
4. Failed (Red) - an error occurred or pipeline stopped

To see the real-time run logs, click on the three dots on one of the processors and click Logs.

![Run your data pipeline](/img/get-started/running-pipeline.png)

<br />

### Open the code editor

To open the code editor, click on the three dots on the processor and click on Code.

![Edit python code in your data pipeline](/img/get-started/edit-code.png)

This will open up the code editor for that step in the pipeline.



<br />

### Update Python packages

First, we update the Python pip packages that we need.

1. Click Edit in the Python packages section
2. Update the packages with these three pip packages
```
pandas==1.4.0
numpy==1.22.3
dataplane==0.0.5
```
3. Click the Install button

![Install python pip packages](/img/get-started/install-python-packages.png)

<br />

### Write and test python code

To add logic or code, we will update the **dp-entrypoint.py** file. This is the default entry point for the python processor.

1. Click on dp-entrypoint.py to open the file
2. Add the below test code to dp-entrypoint.py
2. Press Save
3. Press Run


Your result should look like this.
![Write and test python code](/img/get-started/edit-python-code.png)


```python
import numpy as np
import pandas as pd
import dataplane

s = pd.Series([1, 3, 5, np.nan, 6, 8])

print(s.info)

dates = pd.date_range("20130101", periods=6)

print(dates)

df = pd.DataFrame(np.random.randn(6, 4), index=dates, columns=list("ABCD"))

print(df)

df = pd.DataFrame(np.random.randn(6, 4), index=dates, columns=list("ABCD"))

print(df)
```
<br />

:::info
You can fully replace the code. It is safe to remove any print statements at the top which usually look similar to this: 
```python
print("Pipeline id: d81e1c73-b45f-4ff2-81a8-70604606045b")
print("Node id: 2cefb087-dbb6-48bc-91b8-6708ec6e5606")
```
:::

<br />

### Run your pipeline

Close the code editor and you will be taken back to the pipeline page. <br />

Press Run. <br />

Congratulations, you have successfully built, tested and run a data pipeline on Dataplane 🎉🎉🎉



