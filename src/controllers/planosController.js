const planosModel = require("../models/planosModel");

const findAllPlanos = async (req, res) =>{
    try {
        const planos = await planosModel.find()
        res.status(200).json(planos)
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: error.message
        })
    }
}

const addNewPlano = async(req,res) =>{
    try {
        const 
        {title, valor, description} = req.body

        const newPlano = new planosModel({
            title, valor, description, createdAt: new Date()})

        const savedPlano = await newPlano.save()
        res.status(201).json({message: "seus planos estão disponíveis", savedPlano: savedPlano})
    } catch (error) {
        console.error(error)
        res.status(500).json(error.message)
    }
}

const updatePlano = async (req,res) =>{
    try {
        const planoEncontrado = await planosModel.findById({_id: req.params.id})

        if (req.body.title) {
          planoEncontrado.title = req.body.title
        }
    
        if (req.body.description) {
          planoEncontrado.description = req.body.description
        }
    
        if (req.body.valor) {
          planoEncontrado.valor = req.body.valor
        }
    
        const planoAtualizadoNoBancoDeDados = await planoEncontrado.save()
        res.json(planoAtualizadoNoBancoDeDados)
    } catch (error) {
        console.error(error)
        res.status(500).json({message:"Não foi possivel atualizar"})

    }
}

const deletePlano = async (req,res) =>{
    try {
        const {id} = req.params
        const planoDeletado = await planosModel.findByIdAndDelete(id)
        res.status(200).json({message:`${planoDeletado,id} foi deletado`})
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    findAllPlanos, 
    addNewPlano,
    updatePlano,
    deletePlano
}