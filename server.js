import express from 'express';
import cors from 'cors';
const app = express();

const PORT = process.env.PORT || 8081;
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Succesfull connection');
});

app.listen(PORT, function () {
  console.log(`Server is listening on PORT ${PORT}`);
});
