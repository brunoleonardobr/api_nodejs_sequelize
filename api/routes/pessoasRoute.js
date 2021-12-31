const { Router } = require('express')
const { route } = require('..')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router
  .get('/pessoas', PessoaController.listaPessoas)
  .get('/pessoas/:id', PessoaController.buscaPessoaPorId)
  .post('/pessoas', PessoaController.criar)
  .put('/pessoas/:id', PessoaController.alterar)
  .delete('/pessoas/:id', PessoaController.deletar)
  .get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.buscaMatricula)
  .post('/pessoas/:estudanteId/matricula',PessoaController.criarMatricula)
  .put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.alterarMatricula)
  .delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.deletarMatricula)
module.exports = router