const { Router } = require('express')
const NivelController = require('../controllers/NivelController')

const router = Router()

router
  .get('/niveis', NivelController.listaNiveis)
  .get('/niveis/:id', NivelController.buscaNivelPorId)
  .post('/niveis', NivelController.criar)
  .put('/niveis/:id', NivelController.alterar)
  .delete('/niveis/:id', NivelController.deletar)

module.exports = router