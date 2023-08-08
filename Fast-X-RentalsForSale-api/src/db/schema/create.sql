DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS car_listings CASCADE;
DROP TABLE IF EXISTS companies CASCADE;
DROP TABLE IF EXISTS reviews CASCADE;
DROP TABLE IF EXISTS favorites CASCADE;

-- Create the users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  user_type VARCHAR(20),
  updated_at TIMESTAMP,
  location VARCHAR(100),
  profile_photo TEXT
);

-- Create the companies table
CREATE TABLE companies (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  company_name VARCHAR(100) NOT NULL,
  rating DECIMAL(3, 2),
  location VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users (id)
);

-- Create the car_listings table
CREATE TABLE car_listings (
  id SERIAL PRIMARY KEY,
  company_id INTEGER REFERENCES companies(id),
  car_make VARCHAR(50) NOT NULL,
  car_model VARCHAR(50) NOT NULL,
  mileage INTEGER NOT NULL,
  price INTEGER NOT NULL,
  year INTEGER NOT NULL,
  color VARCHAR(50),
  images TEXT[],
  visibility BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP,
  car_luxury BOOLEAN
);

-- Create the reviews table
CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  reviewer_id INT NOT NULL,
  company_id INT NOT NULL,
  rating DECIMAL(3, 2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP,
  FOREIGN KEY (reviewer_id) REFERENCES users (id),
  FOREIGN KEY (company_id) REFERENCES companies (id)
);

-- Create the favorites table
CREATE TABLE favorites (
  user_id INT NOT NULL,
  car_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (car_id) REFERENCES car_listings (id)
);
