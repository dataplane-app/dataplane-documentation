---
sidebar_label: 'Configure Python workers'
sidebar_position: 5
title: Configure Python workers
description: Configuration settings for Python workers. 
slug: /configure-python-worker
---

The workers are responsible for the actual data processing in the data pipeline. These settings can help you deploy new worker nodes. Worker nodes are clustered into worker groups. These worker groups can be assigned to specific pipelines or even a specific step in a pipeline. 

:::info Environments
Workers and their associated worker groups are specific to an environment. Only pipelines in that environment can be run on worker groups in the same environment. The isolation of environments is important concept in Dataplane to assist data operations to segregate access, projects and compute resources.
:::


### Environment variables common across Dataplane and python workers

| Environment variable  | Description                                                                                                                                                                                |
|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| secret_db_host        | Host of the Postgresql database                                                                                                                                                            |
| secret_db_user        | User for connection to Postgresql database                                                                                                                                                 |
| secret_db_pwd         | Password for connection to Postgresql database                                                                                                                                             |
| secret_db_ssl         | One of disable, allow, prefer, require, verify-ca, verify-full - https://www.postgresql.org/docs/current/libpq-ssl.html                                                                    |
| secret_db_port        | Database port                                                                                                                                                                              |
| secret_db_database    | Database name, default dataplane                                                                                                                                                           |
| secret_jwt_secret     | Generate a UUID secret for JWT. It is important that you keep this secret safe. To create a secret, you can use an online generator for example https://www.uuidgenerator.net/             |
| secret_encryption_key | Generate a 32 charater long random password. It is important you keep this password safe. You can use an online generator for example https://www.lastpass.com/features/password-generator |


### Environment variables specifc to workers

| Environment variable        | Options              | Example                                | Description                                                                                                                                                                  |
|-----------------------------|----------------------|----------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DP_NATS                     |                      | nats://nats:4222, nats://nats-r_1:4222 | Connection string to NATS                                                                                                                                                    |
| DP_DEBUG                    | "true", "false"      | false                                  | Print debug logs to console. Recommended to turn off in production.                                                                                                          |
| DP_DB_DEBUG                 | "true", "false"      | false                                  | Print database debug logs to console.                                                                                                                                        |
| DP_MQ_DEBUG                 | "true", "false"      | false                                  | Print message queue debug logs to console.                                                                                                                                   |
| DP_METRIC_DEBUG             | "true", "false"      | false                                  | Print CPU and memory metrics debug logs to console.                                                                                                                          |
| DP_WORKER_HEARTBEAT_SECONDS |                      | 1                                      | The interval in seconds that the worker sends a heart beat to the main app.                                                                                                  |
| DP_WORKER_GROUP             |                      | python_1                               | The worker group is the collection of worker nodes that have the same configuration. For example, a python worker group that runs the python scripts in the pipeline.        |
| DP_WORKER_CMD               |                      | /bin/bash                              | The shell command installed on the linux. This is useful for different linux installations.                                                                                  |
| DP_WORKER_TYPE              | "container", "other" | container                              | The worker type is for CPU and memory metrics collection. This can differ between a containerised or bare metal installation. If unsure, recommended to keep it to "other".  |
| DP_WORKER_LB                | "roundrobin"         | roundrobin                             | The load balancer strategy is how analytical workloads are distributed to worker nodes.                                                                                      |
| DP_WORKER_ENV               |                      | Development                            | This is the name of the environment the worker node belongs to. This must match environments set inside the main app.                                                        |
| DP_WORKER_PORT              |                      | 9005                                   | The port that the worker node runs on.                                                                                                                                       |

