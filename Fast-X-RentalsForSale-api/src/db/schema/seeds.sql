-- Seed data for users
INSERT INTO users (id, first_name, last_name, email, username, password, user_type, location)
VALUES
  (1, 'SEAF', 'Lastname', 'seaf@example.com', 'seafuser', 'hashed_password', 'user', 'New York'),
  (2, 'DI', 'Lastname', 'di@example.com', 'diuser', 'hashed_password', 'user', 'Los Angeles'),
  (3, 'BRUCE', 'Lastname', 'bruce@example.com', 'bruceuser', 'hashed_password', 'user', 'Chicago'),
  (4, 'ABDUL', 'Lastname', 'abdul@example.com', 'abduluser', 'hashed_password', 'user', 'Houston');

-- Seed data for car_listings
INSERT INTO car_listings (id, company_id, car_make, car_model, mileage, price, year, color, images, visibility, car_luxury)
VALUES
  (1, 1, 'Toyota', 'Corolla', 20000, 15000.00, 2018, 'Blue', ARRAY['image1.jpg', 'image2.jpg'], true, false),
  (2, 2, 'Honda', 'Civic', 30000, 18000.00, 2019, 'Black', ARRAY['image3.jpg', 'image4.jpg'], true, false),
  (3, 3, 'Ford', 'Fusion', 25000, 17000.00, 2020, 'White', ARRAY['image5.jpg', 'image6.jpg'], true, false),
  (4, 4, 'Chevrolet', 'Malibu', 28000, 19000.00, 2019, 'Silver', ARRAY['image7.jpg', 'image8.jpg'], true, false),
  (5, 2, 'Toyota', 'Camry', 15000, 16000.00, 2021, 'Red', ARRAY['image9.jpg', 'image10.jpg'], true, true);

-- Seed data for companies
INSERT INTO companies (id, user_id, company_name, rating, location)
VALUES
  (1, 1, 'SEAF Car Rentals', 4.5, 'New York'),
  (2, 2, 'DI Car Rentals', 4.2, 'Los Angeles'),
  (3, 3, 'BRUCE Car Rentals', 4.7, 'Chicago'),
  (4, 4, 'ABDUL Car Rentals', 4.1, 'Houston');

-- Seed data for reviews
INSERT INTO reviews (id, reviewer_id, company_id, rating)
VALUES
  (1, 2, 1, 4.0),
  (2, 3, 1, 4.8),
  (3, 1, 3, 4.5),
  (4, 4, 2, 3.9),
  (5, 3, 4, 4.2);

-- Seed data for favorites
INSERT INTO favorites (user_id, car_id, created_at, updated_at)
VALUES
  (1, 2, NOW(), NOW()),
  (1, 4, NOW(), NOW()),
  (2, 3, NOW(), NOW()),
  (3, 1, NOW(), NOW()),
  (4, 5, NOW(), NOW());
