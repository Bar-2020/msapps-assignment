const express = require("express");
const axios = require("axios");
const cors = require("cors");

const dotenv = require("dotenv").config();

const app = express();
const PORT = 3000;

app.use(cors());

// Define a function to fetch images from Pixabay API with pagination and sorting
async function fetchPixabayImages(
  page = 1,
  perPage = 9,
  orderBy = "popular",
  category = "sport"
) {
  const url = `https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&page=${page}&per_page=${perPage}&order=${orderBy}&q=${category}`;
  const response = await axios.get(url);
  return response.data;
}

// Route to get paginated and sorted images
app.get("/images", async (req, res) => {
  try {
    const { page, per_page, order_by, category } = req.query;
    const pageNumber = parseInt(page) || 1;
    const perPage = parseInt(per_page) || 9;
    const q = category;

    const images = await fetchPixabayImages(pageNumber, perPage, order_by, q);
    res.json(images.hits);
  } catch (error) {
    console.error("Error fetching images:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
