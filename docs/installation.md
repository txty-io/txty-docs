---
title: Installation
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

# Start the service.
docker volume create --name=texterify-database
docker volume create --name=texterify-assets
docker-compose up

# After everything has started create the database in another terminal.
docker-compose exec app bin/rails db:create db:migrate db:seed
```

The service is now available at [http://localhost](http://localhost). 🎉

## Creating the admin account

After installation you should immediately create an account, because the first registered user on the system is the instance admin account.

## Updating the service

To update the service change the `TEXTERIFY_TAG` to a new version. You can then run the following commands to update Texterify to the new version:

```sh
docker-compose down
docker-compose up
docker-compose exec app bin/rails db:migrate db:seed
```

## Configuration

The table below gives an overview of things you can configure in your Texterify instance. Make sure to also check out the `.env` file.

<table>
    <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>MAILER_HOST</td>
        <td>example.com</td>
        <td>Set the domain of the emails sent from Texterify (e.g. no-reply@example.com for the default value).</td>
    </tr>
    <tr>
        <td>APP_HOST</td>
        <td>example.com</td>
        <td>The fully qualified name of the web server (for example used for constructing email links).</td>
    </tr>
    <tr>
        <td>ASSET_HOST</td>
        <td>example.com</td>
        <td>The fully qualified name of the asset server. This is normally the same as the <b>APP_HOST</b>.</td>
    </tr>
    <tr>
        <td>EMAIL_CONFIRMATION_REQUIRED</td>
        <td>false</td>
        <td>Whether email confirmation is required or not. If set to true make sure to also configure your email server.</td>
    </tr>
    <tr>
        <td>DB_PROD_HOST</td>
        <td>db</td>
        <td>The database host.</td>
    </tr>
    <tr>
        <td>DB_PROD_USERNAME</td>
        <td>postgres</td>
        <td>The database username.</td>
    </tr>
    <tr>
        <td>DB_PROD_DATABASE</td>
        <td>texterify_production</td>
        <td>The name of your database.</td>
    </tr>
    <tr>
        <td>DB_PROD_PASSWORD</td>
        <td></td>
        <td>The password of your database user if needed.</td>
    </tr>
    <tr>
        <td>http_proxy</td>
        <td></td>
        <td>Specify a HTTP proxy for your application.</td>
    </tr>
</table>

## External services

Texterify makes use of some external services. Below you find instructions on how to configure them.

### E-Mail

You need to configure a mail server so Texterify can send emails (e.g. password forgot emails). Make use of the following configuration options to integrate your mail server or provider:

<table>
    <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>SMTP_ADDRESS</td>
        <td>localhost</td>
        <td>The address of the mail server.</td>
    </tr>
    <tr>
        <td>SMTP_PORT</td>
        <td>25</td>
        <td>The port of the mail server.</td>
    </tr>
    <tr>
        <td>SMTP_DOMAIN</td>
        <td></td>
        <td>If you need to specify a HELO domain.</td>
    </tr>
    <tr>
        <td>SMTP_USER_NAME</td>
        <td></td>
        <td>Specify a username if your server requires authentication.</td>
    </tr>
    <tr>
        <td>SMTP_PASSWORD</td>
        <td></td>
        <td>Specify a password if your server requires authentication.</td>
    </tr>
    <tr>
        <td>SMTP_AUTHENTICATION</td>
        <td></td>
        <td>
            You can specify the authentication type here. Choose one of the following if needed:
            <ul>
                <li><b>plain</b> (will send the password in the clear)</li>
                <li><b>login</b> (will send password Base64 encoded)</li>
                <li><b>cram_md5</b> (combines a Challenge/Response mechanism to exchange information and a cryptographic Message Digest 5 algorithm to hash important information)</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>SMTP_ENABLE_STARTTLS_AUTO</td>
        <td>true</td>
        <td>Determines if STARTTLS is enabled in your SMTP server and starts to use it.</td>
    </tr>
    <tr>
        <td>SMTP_OPENSSL_VERIFY_MODE</td>
        <td></td>
        <td>
            When you use TLS you can define how OpenSSL checks the certificate. Choose one of the following if needed:
            <ul>
                <li><b>none</b></li>
                <li><b>peer</b></li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>SMTP_TLS</td>
        <td>false</td>
        <td>Enables the SMTP connection to use SMTP/TLS (SMTPS: SMTP over direct TLS connection).</td>
    </tr>
</table>

### Machine translation

Texterify does all the handling around machine translation for you, but the text is finally translated by DeepL. Therefore if you want to use machine translation you need to configure DeepL:


<table>
    <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>DEEPL_API_TOKEN</td>
        <td></td>
        <td>If you want to use machine translation you need to create an account on <a href="https://www.deepl.com" target="_blank">www.deepl.com</a> and set your API token here.</td>
    </tr>
</table>


:::info

This feature requires communication outside of your network. If a proxy is required for communication you can set the proxy with the `http_proxy` environment variable.

:::

### Over the air translations

The over the air feature works by hosting the translation files on the Google Cloud. If you need to make use of this feature you will have to [create a storage bucket](https://cloud.google.com/storage/docs/creating-buckets) and configure it:

<table>
    <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>GOOGLE_CLOUD_PROJECT</td>
        <td></td>
        <td>The name of your Google Cloud project.</td>
    </tr>
    <tr>
        <td>GOOGLE_CLOUD_KEYFILE</td>
        <td></td>
        <td>The Google Cloud key file used for authentication. See <a href="https://cloud.google.com/iam/docs/creating-managing-service-account-keys" target="_blank">here</a> for more information.</td>
    </tr>
    <tr>
        <td>GOOGLE_CLOUD_OTA_BUCKET_NAME</td>
        <td></td>
        <td>The name of the bucket used for storing the translation bundles.</td>
    </tr>
</table>

:::info

This feature requires communication outside of your network. If a proxy is required for communication you can set the proxy with the `http_proxy` environment variable.

:::

## Debugging

If you experience any issues you can always check the logs of the application which might give a hint about the issue you are currently facing. To view the logs start the app and then execute the following commands:

```shell
docker exec -it texterify-docker-compose-setup_app_1 /bin/sh
cat log/production.log
```

This will give you the logs of the application server.
