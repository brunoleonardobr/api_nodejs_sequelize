const database = require('../models')

class TurmaController{
  static async listaTurmas(req, res){
    try {
      const turmas = await database.Turmas.findAll()
      return res.status(200).json(turmas)
    } catch (error) {
      return res.status(500).json(error.message) 
    }
  }

  static async buscaTurmaPorId(req, res){
    const { id } = req.params
    try {
      const turma = await database.Turmas.findOne(
        { where: 
          {
            id: Number(id)
          }
        })
      return res.status(200).json(turma)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criar(req, res){
    const turma = req.body
    try {
      const novaTurma = await database.Turmas.create(turma)
      return res.status(201).json(novaTurma)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async alterar(req, res){
    const { id } = req.params
    const novaTurma = req.body
    try {
      await database.Turmas.update(novaTurma, { where: 
        {
          id: Number(id)
        }
      })
      const turmaAtualizada = await database.Turmas.findOne(
        { where: 
          {
            id: Number(id)
          }
        })
      return res.status(200).json(turmaAtualizada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deletar(req, res){
    const { id } = req.params
    try {
      await database.Turmas.destroy({ where: 
        {
          id: Number(id)
        }
      })
      return res.status(200).json({mensagem: `id: ${id} deletado`})
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = TurmaController