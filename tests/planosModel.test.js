const planosModel = require("../src/models/planosModel")

describe("modelTest",()=>{
    describe("GET", ()=>{
        const plano = new planosModel({
            "title":"Plano diario",
            "valor":70,
            "description":"valor para uma hora de aula",
            "createdAt": new Date("2023-06-15T17:44:24-03:00")
        })

        test("Deve chamar o model e retornar o nome correto do plano", ()=>{
            expect(plano.title).toBe("Plano diario")
        })

        test("Deve chamar o model e retornar o valor correto do plano", ()=>{
            expect(plano.valor).toBe(70)
        })

        test("Deve chamar o model e retornar a descriçao correto do plano", ()=>{
            expect(plano.description).toBe("valor para uma hora de aula")
        })
    })

    describe("POST", ()=>{
        const plano = new planosModel({
            "title":"Plano diario",
            "valor":70,
            "description":"valor para uma hora de aula",
            "createdAt": new Date("2023-06-15T17:44:24-03:00")
        })

        test("Deve chamar o model e retornar o nome correto do plano", ()=>{
            plano.save().then((dados) => {
               expect(dados.title).toBe("plano diario")
            })
        })
    })

    describe("PATCH", ()=>{
        const plano = new planosModel({
            "title":"Plano diario",
            "valor":70,
            "description":"valor para uma hora de aula",
            "createdAt": new Date("2023-06-15T17:44:24-03:00")
        })

        test("Deve editar o titulo e salvar no banco de dados o novo nome", ()=>{
            plano.title = "plano de aula avulso"
            plano.save().then((dados) => {
               expect(dados.title).toBe("plano de aula avulso")
            })
        })
    })

    describe("DELETE", ()=>{
        const plano = new planosModel({
            "title":"Plano diario",
            "valor":70,
            "description":"valor para uma hora de aula",
            "createdAt": new Date("2023-06-15T17:44:24-03:00")
        })

        test("Deve chamar o model e retornar o nome correto do plano", ()=>{
            plano.save().then((dados) => {
                plano.delete().then((novoDados) => {
                    expect(dados.title).toBe(null);
                })
            })
        })
    })
})