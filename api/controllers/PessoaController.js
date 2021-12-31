const database = require('../models')

class PessoaController {
  static async listaPessoas(req, res){
    try {
      const listaDePessoas = await database.Pessoas.findAll()
      return res.status(200).json(listaDePessoas)
    } catch (error) {
      return res.status(500).json(error.message) 
    }
  }

  static async buscaPessoaPorId(req, res){
    const { id } = req.params
    try {
      const pessoa = await database.Pessoas.findOne(
        { where: 
          {
            id: Number(id)
          }
        })
      return res.status(200).json(pessoa)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criar(req, res){
    const pessoa = req.body
    try {
      const novaPessoa = await database.Pessoas.create(pessoa)
      return res.status(201).json(novaPessoa)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async alterar(req, res){
    const { id } = req.params
    const novaPessoa = req.body
    try {
      await database.Pessoas.update(novaPessoa, { where: 
        {
          id: Number(id)
        }
      })
      const pessoaAtualizada = await database.Pessoas.findOne(
        { where: 
          {
            id: Number(id)
          }
        })
      return res.status(200).json(pessoaAtualizada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deletar(req, res){
    const { id } = req.params
    try {
      await database.Pessoas.destroy({ where: 
        {
          id: Number(id)
        }
      })
      return res.status(200).json({mensagem: `id: ${id} deletado`})
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async buscaMatricula(req, res){
    const { estudanteId, matriculaId } = req.params
    try {
      const matricula = await database.Matriculas.findOne(
        { where: 
          {
            id: Number(matriculaId),
            estudante_id: Number(estudanteId)
          }
        })
      return res.status(200).json(matricula)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criarMatricula(req, res){
    const { estudanteId } = req.params
    const matricula = { ...req.body, estudante_id: Number(estudanteId) }
    try {
      const novaMatricula = await database.Matriculas.create(matricula)
      return res.status(201).json(novaMatricula)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async alterarMatricula(req, res){
    const { estudanteId, matriculaId } = req.params
    const matricula = { ...req.body, estudante_id: Number(estudanteId) }
    try {
      await database.Matriculas.update(matricula, { where: 
        {
          id: Number(matriculaId)
        }
      })
      const matriculaAtualizada = await database.Matriculas.findOne(
        { where: 
          {
            id: Number(matriculaId)
          }
        })
      return res.status(200).json(matriculaAtualizada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deletarMatricula(req, res){
    const { estudanteId, matriculaId } = req.params
    try {
      await database.Matriculas.destroy({ where: 
        {
          id: Number(matriculaId),

        }
      })
      return res.status(200).json({mensagem: `id: ${matriculaId} deletado`})
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = PessoaController