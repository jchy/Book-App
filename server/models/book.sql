CREATE DATABASE bookstore;
CREATE TABLE book(
    book_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    read_time int,
    image VARCHAR(255) NOT NULL,
    description VARCHAR(30000)
);
