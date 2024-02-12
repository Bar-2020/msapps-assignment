const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

// Define a function to fetch images from Pixabay API with pagination and sorting
async function fetchPixabayImages(page = 1, perPage = 10, orderBy = "id") {
  const url = `https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&page=${page}&per_page=${perPage}&order=${orderBy}`;
  const response = await axios.get(url);
  return response.data;
}

// Route to get paginated and sorted images
app.get("/images", async (req, res) => {
  try {
    const { page, per_page, order_by } = req.query;
    const pageNumber = parseInt(page) || 1;
    const perPage = parseInt(per_page) || 10;
    const orderBy = order_by || "id";

    const images = await fetchPixabayImages(pageNumber, perPage, orderBy);
    res.json(images);
  } catch (error) {
    console.error("Error fetching images:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to get images sorted by ID
app.get("/images/sortById", async (req, res) => {
  try {
    const { page, per_page } = req.query;
    const pageNumber = parseInt(page) || 1;
    const perPage = parseInt(per_page) || 10;

    const images = await fetchPixabayImages(pageNumber, perPage, "id");
    res.json(images);
  } catch (error) {
    console.error("Error fetching images:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to get images sorted by date
app.get("/images/sortByDate", async (req, res) => {
  try {
    const { page, per_page } = req.query;
    const pageNumber = parseInt(page) || 1;
    const perPage = parseInt(per_page) || 10;

    const images = await fetchPixabayImages(pageNumber, perPage, "date");
    res.json(images);
  } catch (error) {
    console.error("Error fetching images:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
