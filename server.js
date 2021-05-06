const path = require("path")
const express = require("express")
const app = express()

app.use(express.static(path.join(__dirname, "public")))

app.get("/api/animals/meowsalot", (req, res) => {
  res.header("Cache-Control", "max-age=10")
  res.json({ name: "Meowsalot", species: "cat", "photo": "https://cdn.pixabay.com/photo/2016/09/05/21/37/cat-1647775_960_720.jpg", bio: "This cat is great and very vocal. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis asperiores, sunt consectetur a amet dolorem rem animi tempore molestias nesciunt fuga, sequi alias voluptatum totam reprehenderit assumenda deleniti distinctio? Cumque." })
})

app.get("/api/animals/barksalot", (req, res) => {
  res.header("Cache-Control", "max-age=10")
  res.json({ name: "Barksalot", species: "dog", "photo": "https://cdn.pixabay.com/photo/2016/01/05/17/51/maltese-1123016_960_720.jpg", bio: "This dog is very communicative. Deleniti, tempora quis commodi qui inventore ratione rem porro doloribus et obcaecati cumque quibusdam voluptatibus iure nisi aut minima consequuntur, officiis esse? Lorem ipsum, dolor sit amet consectetur adipisicing elit." })
})

app.get("/api/animals/purrsloud", (req, res) => {
  res.header("Cache-Control", "max-age=10")
  res.json({ name: "Purrsloud", species: "cat", "photo": "https://cdn.pixabay.com/photo/2018/09/24/03/05/cat-3699032_960_720.jpg", bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis asperiores, sunt consectetur a amet dolorem rem animi tempore molestias nesciunt fuga, sequi alias voluptatum totam reprehenderit assumenda deleniti distinctio? Cumque. Lorem ipsum." })
})


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"))
})

app.listen(3000)
