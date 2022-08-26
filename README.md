# CodeLaunch™ Context

Context template for CodeLaunch™ deployments.


## Development

### Container Commands

Use `yarn dc` for all `docker-compose` commands (i.e., `yarn dc exec source sh`.)

### System Commands

`yarn start` starts development stack on default port `3000` (as daemon; auto-logs `codelaunch` service.)

`yarn start:reset` starts development and drops volumes (will lose peer and ledger data, and any "in-flight" database schema updates.)

`yarn log <service>` attaches service output to terminal (i.e., `yarn log source`.)

`yarn stop` stops development stack (CTRL+C does _not_ stop development stack.)

### Data Schema Commands

`yarn codelaunch schema add <app> <object> <message>` generates a new migration template file (i.e., `yarn codelaunch schema add @codelaunch/app table "Create Todos table"`.)

`yarn codelaunch schema apply <app>` applies the next unapplied migration.

`yarn codelaunch schema unapply <app>` unapplies the most recently applied migration.

`yarn codelaunch schema downgrade base` unapplies all migrations.

`yarn codelaunch schema -xenv=development upgrade heads` applies all migrations.

### Maintenance Commands

`yarn clean` removes Fabric material.

`yarn clean:codelaunch` removes all CodeLaunch Docker images (run this to re-pull an updated version of the same tag.)

### Generative Commands

_These commands run automatically within CodeLaunch, and should almost never need manual execution._

`yarn gql:generate` runs client-side GraphQL schema generation (`context/assets/graphql/*`.)

_Refer to `package.json` scripts for more commands._

## Testing

`yarn test:build` builds a new image (with `-TESTING` suffix) with context and apps installed (and outputs artifacts to `output` directory.)

`yarn test:data` starts test Postgres container.

`yarn test:queue` starts test Redis container.

`yarn test:start` starts test CodeLaunch container on default port `8080`.

`yarn test:stop` stops all test containers.

`yarn test:clean` removes built `-TESTING` images.

## Production (CI)

`yarn build` builds a new image with context and apps installed (and outputs artifacts to `output` directory.)