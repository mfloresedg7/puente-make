const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

const MAKE_WEBHOOK_URL = 'https://hook.us2.make.com/jjb6za4tphl2ya7xub9cec8zlw7d4k18';

app.post('/', async (req, res) => {
  try {
    const response = await axios.post(MAKE_WEBHOOK_URL, req.body);
    res.status(200).send('Reenviado a Make correctamente');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al reenviar');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor puente activo en el puerto ${PORT}`));
