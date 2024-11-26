const express = require('express');
const router = express.Router();

// Ejemplo de una ruta básica
router.get('/', (req, res) => {
    res.send({ message: '¡Bienvenido a la API!' });
});

module.exports = router;
