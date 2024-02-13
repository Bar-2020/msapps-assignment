# Image Fetcher API

## Overview

This API fetches images from the Pixabay API and provides endpoints for retrieving paginated, sorted, and filtered images.

## Dependencies

Express: Node.js web framework
Axios: HTTP client for making requests to external APIs
Cors: Middleware for enabling cross-origin resource sharing (CORS)

## Endpoints

### GET /images

Fetches paginated and sorted images based on query parameters.
Query Parameters:
page: Page number (default: 1)
per_page: Number of images per page (default: 9)
order_by: Sorting order (options: "id", "date"; default: "id")
category: Image category (optional)
Response: JSON array of image objects from Pixabay API

### GET /images/sortById

Fetches images sorted by ID.
Query Parameters:
page: Page number (default: 1)
per_page: Number of images per page (default: 9)
Response: JSON array of image objects from Pixabay API

### GET /images/sortByDate

Fetches images sorted by date.
Query Parameters:
page: Page number (default: 1)
per_page: Number of images per page (default: 9)
Response: JSON array of image objects from Pixabay API

## Environment Variables

PIXABAY_API_KEY: Your Pixabay API key (required)

## Running the Server

Install dependencies: npm install
Set the PIXABAY_API_KEY environment variable.
Start the server: npm start
The server will be running on http://localhost:3000.

## Example Usage

Bash:
curl http://localhost:3000/images?page=2&per_page=5&order_by=date&category=animals
