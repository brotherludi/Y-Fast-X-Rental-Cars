# Fast-X-RentalsForSale

## Description

Lighthouse Labs - Web Development Program - Final Project

Low Mileage, Nearly New Models, and Unbeatable Prices! Find your dream car at a fraction of the cost of buying brand new. Welcome to Fast-X-RentalsForSale, where incredible deals await 🤩

## Screenshots

<img width="1728" alt="About" src="https://github.com/brotherludi/Fast-X-RentalsForSale/assets/110562017/e8bbaa12-cced-4e0e-958c-7bb47f9eda83">
<img width="1728" alt="1" src="https://github.com/brotherludi/Fast-X-RentalsForSale/assets/110562017/89ade81b-0204-4c19-bb77-0edb91ce4b69">
<img width="1728" alt="2" src="https://github.com/brotherludi/Fast-X-RentalsForSale/assets/110562017/b5007c58-3509-4ff6-a256-0083011f6c5b">
<img width="1728" alt="3" src="https://github.com/brotherludi/Fast-X-RentalsForSale/assets/110562017/55764e56-c204-4467-b3e9-ac32c45f5047">
<img width="1728" alt="4" src="https://github.com/brotherludi/Fast-X-RentalsForSale/assets/110562017/013d964f-603b-4d9a-ab5a-2aaa7909e52d">
<img width="1728" alt="5" src="https://github.com/brotherludi/Fast-X-RentalsForSale/assets/110562017/f333f5c4-8042-42d1-83a2-d151000f696f">
<img width="1728" alt="6" src="https://github.com/brotherludi/Fast-X-RentalsForSale/assets/110562017/456f8fff-8ac2-4847-a8e2-167daf888bda">
<img width="1728" alt="7" src="https://github.com/brotherludi/Fast-X-RentalsForSale/assets/110562017/11c60abc-c0e2-4c41-bac6-23d306c878ef">

## Getting Started

1. Install dependencies with npm install.
2. Create the .env by using .env.example as a reference.
3. Update the .env file with your local information: <br>
    PGHOST=localhost <br>
    PGUSER=labber <br>
    PGDATABASE=car_used_rental <br>
    PGPASSWORD=labber <br>
    PGPORT=5432 <br>
4. Inside /Fast-X-RentalsForSale-api run: <br>
    psql (Enter psql) <br>
    psql -U labber car_used_rental (Create car_used_rental database with user labber) <br>
    \i src/db/schema/create.sql <br>
    \i src/db/schema/seeds.sql <br>
5. Start the Webpack Development Server(/Fast-X-RentalsForSale-api) using the npm start command.
6. Start the React app using the npm start command at root folder. 
   The app will be served at http://localhost:3001/.