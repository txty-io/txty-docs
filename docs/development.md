---
sidebar_position: 13
title: Development
---

This guide covers basic development tasks. If you need custom development for you or your company contact <sales@texterify.com>.

## Restoring a database backup locally

- Download and store the backup somewhere on your machine
- Run `docker ps` and copy the `CONTAINER ID` of your postgres container
- Next run `cat <backup_file>.sql | docker exec -i <container_id> psql -U postgres -d texterify_development`
