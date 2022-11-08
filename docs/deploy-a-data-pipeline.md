# Deploying a pipeline

Here you will find out:

* Why we deploy pipelines
* How to deploy a pipeline with a step-by-step instruction

## Why deploying a pipeline?

You may need to make changes to your pipeline from time to time. If a developer is working on it, then it may interfere with the running pipeline. Pipelines are isolated. The changes may disrupt the running pipeline, hence the deployment mechanism comes in handy. Deployment means that we create a version of a pipeline that has a certain marking. It is customarily composed of three numbers separated by dots. This way, we can always be sure which version of the pipeline it is.

## How to deploy a pipeline?

You will have to follow these steps:

1. Open your pipeline
2. Start deploying
3. Choose environment
4. Give your version a number
5. Deploy your pipeline

### Open your pipeline

First of all, you need a pipeline. If you haven't already created a pipeline, please create a new one. 

In the **Pipelines** view, open your pipeline:

![Example pipeline view](/img/deployment/01.png)

### Start deploying

Click on the button with three dots and select **Deploy**:

![Example pipeline view](/img/deployment/02.png)

### Choose environment

You will see the deployment view where you need to specify which environment you want to deploy to:

![Example pipeline view](/img/deployment/03.png)

You can choose either **Development** or **Production**:

![Example pipeline view](/img/deployment/04.png)

### Give your version a number

Once you've chosen the environment, you will be prompted the version control:

![Example pipeline view](/img/deployment/05.png)

You need to determine the version number for your deployment along with:

* default worker group
* worker group

![Example pipeline view](/img/deployment/06.png)

> Typically, there are 3 numbers:
> * major
> * minor
> * patch
>
> The first one indicates big changes. The second one informs about new features. The last one is used if some bugs have been fixed.

### Deploy your pipeline

When you're ready, you can click on the **Deploy** button.

If the pipeline deployment has been successful, you will be transferred to the Deployments page where you can see the version of your deployment:

![Example pipeline view](/img/deployment/07.png)

Congratulations, you have successfully deployed a data pipeline on Dataplane!