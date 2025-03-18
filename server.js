import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8081;
app.use(cors());

app.get('/', (req, res) => {
  res.send('Succesfull connection');
});

app.listen(PORT, function () {
  console.log(`Server is listening on PORT ${PORT}`);
});
