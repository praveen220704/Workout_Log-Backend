# FullStack Development 

## About

This repository contains the code for the backend application for the [Frontend Repository]()

Backend Application is a RESTful API developed using Node.js and Express.js. It uses MongoDB as the database and Mongoose as the ODM (Object Data Modeling).

## Application

Workout Log Application

### Features

- [x] User Registration
- [x] User Login

- [x] Workout Log

- [x] Logout

## API Endpoints

### Users

#### Unauthenticated user

- `POST /api/users` - Create a new user
- `POST /api/users/login` - Login user

#### Authenticated user

- `POST /api/users/logout` - Logout user
- `GET /api/users/me` - Get current user
- `PUT /api/users/me` - Update current user
- `DELETE /api/users/me` - Delete current user

#### Authenticated - Admin:

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user by ID
- `DELETE /api/users/:id` - Delete user by ID
