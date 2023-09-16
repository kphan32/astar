# A\*

React-Native application to create walking tours.

## Development

0. Set environment variables

```bash
cat > .env << EOF
# *Note* Env vars prefixed with 'EXPO_PUBLIC_' will be accessible from the mobile application

# Mapbox requires authentication to download its libraries. The following env var
# should be a private key generated with the 'Downloads:Read' scope.
MAPBOX_DOWNLOAD_TOKEN=

# This is the public key that will be used to access Mapbox within the app.
EXPO_PUBLIC_MAPBOX_PUBLIC_KEY=
EOF
```

1. Install JS dependencies

```bash
yarn
```

2. Run the application

```bash
yarn android
```
