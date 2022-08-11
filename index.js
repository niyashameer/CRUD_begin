const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
	res.send("Hello World!");
});

app.post("/", async (req, res) => {
	res.send("POST request");
});

app.put("/", async (req, res) => {
	res.send("PUT request");
});

app.patch("/", async (req, res) => {
	res.send("PATCH request");
});

app.listen(3000, async () => {
	console.log("Listening for requests...");
});
