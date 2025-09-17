const express = require('express')
const cors = require('cors')
const fs = require('fs')
const path = require('path')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())

app.listen(PORT,()=>{
    console.log(`Listning to port ${PORT}`)
})

app.get("/api/events", (req, res) => {
  const filePath = path.join(__dirname, "data", "event.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Error reading event file" });
    }
    const recipes = JSON.parse(data || "[]");
    res.json(recipes);
  });
});

app.post("/api/events", (req,res)=>{
    const filePath = path.join(__dirname, "data", "event.json");
    const { title, description, date, location, maxAttendees} = req.body;

    if (!title || !date || !location || !maxAttendees) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        return res.status(500).json({ error: "Error reading event file" });
      }

      const recipes = JSON.parse(data || "[]");

      // Create new recipe
      const newEvent = {
        eventId: "EVT-" + Date.now(),
        title,
        description,
        date: !date ? Date.now() : date,
        location,
        maxAttendees,
        currentAttendees: 0,
        status: "upcoming"
      };

      recipes.push(newEvent);

      // Save back to file
      fs.writeFile(filePath, JSON.stringify(recipes, null, 2), (err) => {
        if (err) {
          return res.status(500).json({ error: "Error saving recipe" });
        }
        res.status(201).json(newEvent);
      });
    });
});