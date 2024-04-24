# Book Management API

![Book Management API Logo](./logo%20made%20by%20AI.webp)

This project is a simple Node.js backend for managing books. It implements basic CRUD operations on book entries and supports user authentication. It's built using Express and MongoDB.
<br/>

# Table of Contents

1. [Features](#features)
2. [Running The Project](#Running-The-Project)
3. [API Endpoints](#API-Endpoints)
4. [Technology Stack](#technology-stack)
5. [Authors](#authors)
6. [License](#license)

# Features

-   User registration and authentication
-   CRUD operations for books
-   Filtering books by author and publication year
-   Basic security and input validation

# Running The Project

### Prerequisites

-   Node.js
-   npm (Node Package Manager)
-   MongoDB

### Installation

1. Clone the repo
    ```sh
    git clone https://github.com/devanshdalmia01/book-management-api.git
    ```
2. Install packages
    ```sh
    npm i
    ```
3. Set environment variables

    ```sh
    PORT=3000
    MONGO_DB_URL=
    JWT_SECRET=
    ```

4. Run
    ```sh
    npm start
    ```
    #### OR
5. Run with nodemon
    ```sh
    npm run dev
    ```

# API Endpoints

## User Authentication

1. Register User

    `POST /api/auth/register`
    ##### Request
    ```sh
    {
        username:
        email:
        password:
    }
    ```

2. Login User

    `POST /api/auth/login`
    ##### Request
    ```sh
    {
        email:
        password:
    }
    ```
    ##### Response
    ```sh
    {
        token:
    }
    ```

## Book Management

1. Get All Books

    `GET /api/books`
    ##### Optional Query Params
    ```sh
    author=
    year=
    ```
    ##### Response
    ```sh
    [
        {
            _id
            title:
            author:
            publicationYear:
        },
    ]
    ```

2. Create a new book (Authentication Required, Use token from login)

    `POST /api/books`
    ##### Request
    ```sh
    {
        title:
        author:
        publicationYear:
    }
    ```
    ##### Response
    ```sh
    {
        _id:
        title:
        author:
        publicationYear:
    }
    ```

3. Get book by Id

    `GET /api/books/:id`
    ##### Response
    ```sh
    {
        _id:
        title:
        author:
        publicationYear:
    }
    ```

4. Update a book

    `PUT /api/books/:id`
    ##### Request
    ```sh
    {
        title:
        author:
        publicationYear:
    }
    ```
    ##### Response
    ```sh
    {
        _id:
        title:
        author:
        publicationYear:
    }
    ```

5. Delete a book

    `DELETE /api/books/:id`
    ##### Response
    ```sh
    Book deleted!
    ```

# Technology Stack

I used a tried and tested tech stack. This resulted in a fast, performant, and easily-extensible web app that should be fairly future-proof for the coming next several years. We used:

-   [Node.js](https://nodejs.org/)
-   [Express.js](https://expressjs.com/)
-   [MongoDB with Mongoose](https://www.mongodb.com/)
-   [JWT Authentication](https://jwt.io/)
-   [bcrypt for password hashing](https://www.npmjs.com/package/bcrypt)

# Authors

-   Devansh Dalmia
    -   [LinkedIn](https://www.linkedin.com/in/devanshdalmia1/)
    -   [GitHub](https://github.com/devanshdalmia01/)
    -   [Email](mailto:devanshdalmia1@gmail.com)

# License

[MIT](https://opensource.org/licenses/MIT)
