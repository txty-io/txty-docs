---
title: Updating the service
sidebar_position: 2
---

# Updating the service

To update the service change the `TEXTERIFY_TAG` to a new version. For available versions see [here](https://hub.docker.com/repository/docker/chrztoph/texterify). Make sure to backup your database so no data is lost in case of a failure. You can then run the following commands to update Texterify to the new version:

```shell
# Stop the current service.
docker-compose down

# Get the latest changes to the docker-compose setup.
# See https://github.com/texterify/texterify-docker-compose-setup for changes.
git pull
docker-compose build

# Start the service which will update Texterify to the new version.
docker-compose up --always-recreate-deps

# In case there are database changes apply them.
docker-compose exec app bin/rails db:migrate db:seed
```
