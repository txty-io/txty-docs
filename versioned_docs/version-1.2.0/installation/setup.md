---
title: Setup
sidebar_position: 0
---

:::info

This guide covers the installation and configuration of the on-premise (self hosting) version of Texterify. If you are using the cloud version you can ignore this installation instructions, because all of the things are already covered by the Texterify team for you.

:::

## Requirements

Tools:
- docker
- docker-compose

Accounts/Servers:
- Email server or email provider account (optional but recommended)
- DeepL account (optional)
- Google Cloud Account (optional)

## Starting the service

To get you up as easy as possible run the following commands to get a complete docker-compose setup up and running:

```shell
# Clone the docker-compose configuration.
git clone https://github.com/texterify/texterify-docker-compose-setup.git
cd texterify-docker-compose-setup

# Generate a secret key for the app.
# Make sure to keep this private.
echo SECRET_KEY_BASE=`openssl rand -hex 64` > secrets.env

# Open the .env file and replace "example.com" with your host (if you
# are trying to run Texterify locally just use "localhost" as host).
# Also make sure to check out the other configuration options (see below).

# Start the service.
docker volume create --name=texterify-database
docker volume create --name=texterify-assets
docker-compose up --always-recreate-deps --build

# After everything has started create the database in another terminal.
docker-compose exec app bin/rails db:create db:migrate db:seed
```

The service is now available at [http://localhost](http://localhost) (or whatever you have set your `APP_HOST` to). 🎉

## Creating the admin account

After installation you should immediately create an account, because the first registered user on the system is the instance admin account.
