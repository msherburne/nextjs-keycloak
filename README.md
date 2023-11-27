# NextJS w/ Keycloak SSO

This is a simple example of how to use Keycloak with NextJS. Feel free to clone this repo and use it as a starting point for your own project.

This application uses the NextJS App Directory and NextAuth to handle server and front end authentication. It also uses the Keycloak JS adapter to handle the authentication flow.

## Prerequisites

- NodeJS
- Keycloak Server / Container

## Getting Started

```bash
# Copy template using degit
npx degit https://github.com/msherburne/nextjs-keycloak <APP NAME>

# Using create-next-app
npx create-next-app --example https://github.com/msherburne/nextjs-keycloak <YOUR_APP_NAME>

```

## Deployment Options

- Vercel
- NodeJS Server (using supplied Dockerfile)
- Docker Compose
