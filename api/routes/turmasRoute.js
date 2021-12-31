const { Router } = require('express')
const TurmaController = require('../controllers/TurmaController')

const router = Router()

router
  .get('/turmas', TurmaController.listaTurmas)
  .get('/turmas/:id', TurmaController.buscaTurmaPorId)
  .post('/turmas', TurmaController.criar)
  .put('/turmas/:id', TurmaController.alterar)
  .delete('/turmas/:id', TurmaController.deletar)
  
module.exports = router