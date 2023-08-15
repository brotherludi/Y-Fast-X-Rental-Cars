-- Seed data for users
INSERT INTO users (first_name, last_name, email, username, password, user_type, location)
VALUES
  ('SEAF', 'Lastname', 'seaf@RentalsForSale.ca', 'seafuser', 'hashed_password', 'user', 'New York'),
  ('DI', 'Lastname', 'di@RentalsForSale.ca', 'diuser', 'hashed_password', 'user', 'Los Angeles'),
  ('BRUCE', 'Lastname', 'bruce@RentalsForSale.ca', 'bruceuser', 'hashed_password', 'user', 'Chicago'),
  ('ABDUL', 'Lastname', 'abdul@RentalsForSale.ca', 'abduluser', 'hashed_password', 'user', 'Houston');

-- Seed data for companies
INSERT INTO companies (user_id, company_name, rating, location, email, phone_number, street_address)
VALUES
  (1, 'SEAF-RentalsForSale', 4.7, 'Ottawa', 'seaf@RentalsForSale.ca', '965-456-7890', '123 Main St'),
  (2, 'DI-RentalsForSale', 4.7, 'Calgary', 'di@RentalsForSale.ca', '987-654-3210', '456 Elm St'),
  (3, 'BRUCE-RentalsForSale', 4.7, 'Victoria', 'bruce@RentalsForSale.ca', '965-524-2547', '789 Oak Ave'),
  (4, 'ABDUL-RentalsForSale', 4.7, 'Toronto', 'abdul@RentalsForSale.ca', '906-859-3333', '567 Maple St');

-- Seed data for car_listings
INSERT INTO car_listings (company_id, car_make, car_model, mileage, price, year, color, images, visibility, car_luxury)
VALUES
  (1, 'Acura', 'Integra', 36524, 37695.00, 2022, 'Blue', ARRAY['https://hips.hearstapps.com/hmg-prod/images/2024-acura-integra-type-s-blue-front-three-quarters-643439930a7f5.jpg'], true, true),
  (2, 'Honda', 'Civic', 36541, 18000.00, 2019, 'Black', ARRAY['https://uploads.builtforbackroads.com/uploads/2022/02/2022.02.07-HONDA-CIVIC-2019_1.jpg'], true, false),
  (3, 'Mercedes-Benz', 'S580e', 12377, 129999.00, 2023, 'Black', ARRAY['https://media.zenfs.com/en/autoblog_50/20f94babdf223fe560dfabf96c044ec0'], true, true),
  (4, 'Chevrolet', 'Camaro', 18657, 49999.00, 2022, 'Yellow', ARRAY['https://www.motortrend.com/uploads/2021/09/001-chevy-camaro-driver-front-three-quarter.jpg'], true, false),
  (2, 'Toyota', 'Camry', 15324, 16000.00, 2021, 'Red', ARRAY['https://www.autotrader.com/wp-content/uploads/2022/02/2021-toyota-camry-trd.jpg?w=1024'], true, false);

-- Seed data for favorites
INSERT INTO favorites (user_id, car_id, created_at, updated_at)
VALUES
  (2, 1, NOW(), NOW()),
  (4, 1, NOW(), NOW()),
  (3, 1, NOW(), NOW()),
  (1, 1, NOW(), NOW()),
  (4, 1, NOW(), NOW());

-- Seed data for reviews
INSERT INTO reviews (reviewer_id, company_id, rating)
VALUES
  (2, 1, 4.0),
  (3, 1, 4.8),
  (1, 3, 4.5),
  (4, 2, 3.9),
  (3, 4, 4.2);
