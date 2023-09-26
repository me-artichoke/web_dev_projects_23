import express from "express";
const app = express();
const port = 3000;

//getting endpints which in this case is the root /
// you can also more endpoints like about about and more
app.get("/", (req, res) => {
    res.send('<h1>Homepage</h1>')
})

// contage page
app.get("/contact", (req, res) => {
    res.send("<h1>Contact Me</h1>")
})
//about page
app.get("/about", (req, res) => {
    res.send('<h1>About Us</h1>')
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})