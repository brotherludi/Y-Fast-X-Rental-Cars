# Fast-X-RentalsForSale-api

## Setup

Install dependencies with `npm install`.

## Creating The DB

Use the `psql -U car_used_rental` command to login to the PostgreSQL server with the username `car_used_rental` and the password `car_used_rental`. This command **MUST** be run in a vagrant terminal, we are using the PostgreSQL installation provided in the vagrant environment.

Create a database with the command `CREATE DATABASE scheduler_car_used_rental;`.

Copy the `.env.example` file to `.env.car_used_rental` and fill in the necessary PostgreSQL configuration. The `node-postgres` library uses these environment variables by default.

```
PGHOST=localhost
PGUSER=labber
PGDATABASE=scheduler_car_used_rental
PGPASSWORD=labber
PGPORT=5432
```

## Seeding

Run a the car_used_rental server with `npm start` in the Host environment. We are only using vagrant for `psql` this week.

Both of these achieve the same result.

- Make a `GET` request to `/api/debug/reset` with `curl http://localhost:8001/api/debug/reset`.
- Use the browser to navigate to `http://localhost:8001/api/debug/reset`.

The `car_used_rental` data is random. Each time we seed we expect to see different appointments.

## Run The Server

Running the server normally
```sh
npm start
```

Running the server so it returns an error when saving/deleting for testing the client's error handling capabilities
```sh
npm run error
```

## Api

### home  page
`GET /api/home`

Response:

```json



### cars-for-sale

`GET /api/cars-for-sale`

Response:

```json
