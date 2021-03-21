const db = require("../database/db")

class DonorsController {
  index(req, res) {
    db.query("SELECT * FROM donors", function(err, result) {
        if (err) return res.send("Erro de Banco de Dados")

        const donors = result.rows
        return res.render("index.html", { donors })
    })    
  }

  create(req, res) {
    const { name, email, blood } = req.body

    if (name == "" || email == "" || blood == "") {
        return res.send("Todos os campos são obrigatórios")
    }

    const query = `
    INSERT INTO donors ("name", "email", "blood") 
    VALUES ($1, $2, $3)`

    const values = [name, email, blood]
        
    db.query(query, values, function(err) {
        if(err) return res.send("erro no banco de dados")

        return res.redirect("/")
    })   
  }
}

module.exports = new DonorsController()