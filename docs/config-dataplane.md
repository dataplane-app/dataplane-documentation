---
sidebar_label: 'Configure Dataplane'
sidebar_position: 4
title: Configure Dataplane
description: Configuration settings for Dataplane. 
slug: /configure-dataplane
---

These environment variables can be used to configure Dataplane.


### Environment variables common across Dataplane and workers

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


### Environment variables specifc to Dataplane

| Environment variable | Options                     | Example                                | Description                                                          |
|----------------------|-----------------------------|----------------------------------------|----------------------------------------------------------------------|
| DP_DATABASE          | "timescaledb", "postgresql" | timescaledb                            | Determines whether to use Timescaledb hyper tables for logging       |
| DP_PORT              |                             | 9000                                   | Run Dataplane on server port. Default 9000.                          |
| DP_NATS              |                             | nats://nats:4222, nats://nats-r_1:4222 | Connection string to NATS                                            |
| DP_MODE              | "development", "production" | development                            | Development mode allows for first time setup.                        |
| DP_DEBUG             | "true", "false"             | false                                  | Print debug logs to console. Recommended to turn off in production.  |
| DP_DB_DEBUG          | "true", "false"             | false                                  | Print database debug logs to console.                                |
| DP_MQ_DEBUG          | "true", "false"             | false                                  | Print message queue debug logs to console.                           |
| DP_METRIC_DEBUG      | "true", "false"             | false                                  | Print CPU and memory metrics debug logs to console.                  |
| DP_SCHEDULER_DEBUG   | "true", "false"             | false                                  | Print scheduler debug logs to console.                               |
| DP_CLEANTASKS_DAYS   |                             | 60                                     | Number of days to keep historical tasks                              |
| DP_REMOVELOGS_DAYS   |                             | 60                                     | Number of days to keep run logs                                      |