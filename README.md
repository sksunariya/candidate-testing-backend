# Full-Stack Web Application for Candidate Testing Application

## 1. Project Overview

This project is a full-stack web application designed to manage user profiles, tests, questions, and associated data like groups, tags, and answers. The system allows users to:
- Create and manage user profiles.
- Create and assign tests to users.
- Manage groups and assign profiles and tests to groups.
- Manage questions and associate them with tests.
- Store answers for tests and evaluate their correctness.

The backend is built using **Node.js** and **Express.js** with **MySQL** as the database, while the frontend can use frontend technologies like **React**. The system supports authentication and role-based access control (RBAC) using JWT tokens.

## 2. Flow of Logic

The system's main components are **Profiles**, **Tests**, **Groups**, **Questions**, **Answers**, and **Tags**. Each component has its associated routes, controllers, and database models. Below is the typical flow:

1. **Authentication & Authorization**: Users are authenticated via JWT. Depending on the user's role, access to certain routes is restricted.
   
2. **Profile Management**: Admins can create, update, and delete user profiles. Each profile can be tagged with multiple tags.
   
3. **Test Management**: Admins can create and assign tests to profiles and groups. Each test consists of multiple questions.
   
4. **Question Management**: Questions can be created, updated, and assigned to specific tests.
   
5. **Answer Submission**: Users submit answers to the test questions. Answers are stored and checked for correctness.
   
6. **Group Management**: Admins can create groups and associate profiles and tests with those groups.
   
7. **Tagging & Linking**: Profiles can be tagged with multiple tags for categorization, and links can be associated with tags.

Error handling is centralized, and data validation is performed for incoming requests to ensure correctness.

## 3. API Routes and Specifications

Here is the list of all the available API routes, their methods, and purposes:

### Profiles API

| Route                | Method | Description                             |
|----------------------|--------|-----------------------------------------|
| `/api/profiles`      | GET    | Get all profiles (authenticated users)  |
| `/api/profiles/:id`  | GET    | Get profile by ID (authenticated users) |
| `/api/profiles`      | POST   | Create a new profile (Admin only)       |
| `/api/profiles/:id`  | PUT    | Update a profile by ID (Admin only)     |
| `/api/profiles/:id`  | DELETE | Delete a profile by ID (Admin only)     |

### Groups API

| Route               | Method | Description                            |
|---------------------|--------|----------------------------------------|
| `/api/groups`       | GET    | Get all groups (authenticated users)   |
| `/api/groups/:id`   | GET    | Get group by ID (authenticated users)  |
| `/api/groups`       | POST   | Create a new group (Admin only)        |
| `/api/groups/:id`   | PUT    | Update a group by ID (Admin only)      |
| `/api/groups/:id`   | DELETE | Delete a group by ID (Admin only)      |

### Questions API

| Route                | Method | Description                              |
|----------------------|--------|------------------------------------------|
| `/api/questions`     | GET    | Get all questions                        |
| `/api/questions/:id` | GET    | Get question by ID                       |
| `/api/questions`     | POST   | Create a new question                    |
| `/api/questions/:id` | PUT    | Update a question by ID                  |
| `/api/questions/:id` | DELETE | Delete a question by ID                  |

### Tests API

| Route                | Method | Description                              |
|----------------------|--------|------------------------------------------|
| `/api/tests`         | GET    | Get all tests                            |
| `/api/tests/:id`     | GET    | Get test by ID                           |
| `/api/tests`         | POST   | Create a new test                        |
| `/api/tests/:id`     | PUT    | Update a test by ID                      |
| `/api/tests/:id`     | DELETE | Delete a test by ID                      |

### Tags API

| Route            | Method | Description                          |
|------------------|--------|--------------------------------------|
| `/api/tags`      | GET    | Get all tags                         |
| `/api/tags/:id`  | GET    | Get tag by ID                        |
| `/api/tags`      | POST   | Create a new tag                     |
| `/api/tags/:id`  | PUT    | Update a tag by ID                   |
| `/api/tags/:id`  | DELETE | Delete a tag by ID                   |

### Links API

| Route             | Method | Description                         |
|-------------------|--------|-------------------------------------|
| `/api/links`      | GET    | Get all links                       |
| `/api/links/:id`  | GET    | Get link by ID                      |
| `/api/links`      | POST   | Create a new link                   |
| `/api/links/:id`  | PUT    | Update a link by ID                 |
| `/api/links/:id`  | DELETE | Delete a link by ID                 |

### Answers API

| Route                | Method | Description                            |
|----------------------|--------|----------------------------------------|
| `/api/answers`       | GET    | Get all answers                        |
| `/api/answers/:id`   | GET    | Get answer by ID                       |
| `/api/answers`       | POST   | Submit a new answer                    |
| `/api/answers/:id`   | PUT    | Update an answer by ID                 |
| `/api/answers/:id`   | DELETE | Delete an answer by ID                 |

