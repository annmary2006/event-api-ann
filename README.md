# Event API - Rinu

This is a simple Event API built with **Node.js + Express** to manage events.

---

## 🚀 Deployed API URL

Base URL: **`https://event-api-rinu.onrender.com`**

---

## 🛠 How to Run Locally

1. **Clone the Repository**

   ```bash
   git clone https://github.com/rinu143/event-api-rinu.git
   cd event-api-rinu
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the project root and add:

   ```env
   PORT=5000
   ```

4. **Run the Server**

   ```bash
   npm start
   ```

   The server will start at **`http://localhost:5000`**

---

## 📌 API Endpoints Documentation

### 1. Create Event

**POST** `/api/events`

* **Body (JSON):**

  ```json
  {
    "title": "Tech Conference",
    "description": "A conference about technology",
    "date": "2025-09-30",
    "location": "Bangalore"
  }
  ```
* **Response:**

  ```json
  {
    "_id": "6500000000000001",
    "title": "Tech Conference",
    "description": "A conference about technology",
    "date": "2025-09-30T00:00:00.000Z",
    "location": "Bangalore"
  }
  ```

---

### 2. Get All Events

**GET** `/api/events`

* **Response:**

  ```json
  [
    {
      "_id": "6500000000000001",
      "title": "Tech Conference",
      "description": "A conference about technology",
      "date": "2025-09-30T00:00:00.000Z",
      "location": "Bangalore"
    }
  ]
  ```

---
## 📖 Notes

* Deployed URL may take a few seconds to spin up if hosted on free services (like Render).

---

✅ You are now ready to use the **Event API** 🎉
