---
title: Debugging
sidebar_position: 99
---

# Debugging

If you experience any issues you can always check the logs of the application which might give a hint about the issue you are currently facing. To view the logs start the app and then execute the following commands:

```shell
docker exec -it texterify-docker-compose-setup_app_1 /bin/sh
cat log/production.log
```

This will give you the logs of the application server.
