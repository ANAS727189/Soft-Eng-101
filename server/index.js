import express from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config();

const app = express();
const PORT = process.env.PORT;


app.use(express.json());
app.use(cors());

// TODO: Create a route to fetch Pokemon data here


app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});