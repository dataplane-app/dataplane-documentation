---
sidebar_label: 'Python libraries'
sidebar_position: 7
title: Installing Python libraries in Dataplane
description: This guide is how to install Python libraries that you can use with Dataplane. 
slug: /installing-python-packages
---

One of the great strengths of Python is the wide range of available tools and libraries.

Here are some recommended libraries that the Dataplane team often use:

1. [Pandas Dataframes](https://pypi.org/project/pandas/) is a powerful framework to join, transform and analyze data in memory.
2. [SQLAlchemy](https://pypi.org/project/SQLAlchemy/) is a SQL client with connections to many different databases.
3. [Requests](https://pypi.org/project/requests/) is a HTTP framework for connecting and consuming APIs
4. [Boto3](https://pypi.org/project/boto3/) is a AWS framework that we often use for storing data in S3 Compatible storage.
5. [Redis](https://pypi.org/project/redis/) is a Redis client and is useful for temporarily storing data in memory and to cache data models.
6. [Tensorflow](https://pypi.org/project/tensorflow/) is a deep learning framework for machine learning or AI
7. [RPA Framework](https://pypi.org/project/rpaframework/) is a Robotics Process Automation (RPA) framework for automating repetitive tasks for example downloading daily reports from the company's ERP platform.

You can find more Python packages at https://pypi.org/

<br />
At Dataplane, we noticed how much code is required to do simple operations such as store a file or transfer data between pipeline steps. We have developed a Dataplane Python package to reduce the amount of code and make it much easier for you. 

[Dataplane Python Package](https://pypi.org/project/dataplane/)

 
Below is a step by step guide on how to use python libraries in Dataplane. 
<br />

### Go to the Python code editor

To install python packages, open the code editor and click on the three dots on the processor then click on Code.

![Edit python code in your data pipeline](/img/get-started/edit-code.png)

This will open up the code editor for that step in the pipeline.

<br />

### Install a Python package

1. Click Edit in the Python packages section
2. Update the packages with these pip packages
```
pandas==1.5.0
numpy==1.22.3
dataplane==0.0.5
```
3. Click the Install button

![Install python pip packages](/img/get-started/install-python-packages.png)




<br />