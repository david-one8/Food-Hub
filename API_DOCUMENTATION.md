# Food Hub API Documentation

## Base URL
```
http://localhost:3000/api
```

## Authentication Endpoints

### Register User
- **URL**: `/auth/register`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
  ```
- **Response**: User object with JWT token

### Login User
- **URL**: `/auth/login`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Response**: User object with JWT token

### Register Food Partner
- **URL**: `/auth/register-partner`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "restaurantName": "string",
    "ownerName": "string",
    "email": "string",
    "password": "string",
    "phone": "string",
    "address": "string",
    "cuisine": "string"
  }
  ```
- **Response**: Food Partner object with JWT token

### Login Food Partner
- **URL**: `/auth/login-partner`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Response**: Food Partner object with JWT token

## Headers
- **Authorization**: `Bearer <jwt_token>` (for protected routes)
- **Content-Type**: `application/json`

## Error Responses
- **400**: Bad Request
- **401**: Unauthorized
- **404**: Not Found
- **500**: Internal Server Error
