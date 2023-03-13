---
sidebar_position: 13
title: Development
---

This guide covers basic development tasks.

:::info

If you need custom development for you or your company contact <sales@texterify.com>.

:::
## Restore a database backup to the development docker database

- Download and store the backup somewhere on your machine
- Run the script `./scripts/restore-local-dev-db-backup.sh ~/<backup>.sql`

:::caution

This will delete all your data in your development database.

:::

## Import a database backup to the development docker database

- Download and store the backup somewhere on your machine
- Run `docker ps` and copy the `CONTAINER ID` of your postgres container
- Next run `cat <backup_file>.sql | docker exec -i <container_id> psql -U postgres -d texterify_development`
