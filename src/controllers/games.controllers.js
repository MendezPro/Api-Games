import gameDAO from "../dao/games.dao.js";

export const getAll = (req, res) => {
    gameDAO.getAll()
        .then(games => res.render('../src/views/index',{ games }))
        .catch(err => res.json({
            status: "Server Unavailable"
        }));
}
    
export const getOne = (req, res) => {
    const barcode = req.params.barcode;
    gameDAO.getOne(barcode)
        .then(game => {
            !game ? res.json({
                 message: "Product not found" 
                }) : res.render('../src/views/edit', {game});
        })
        .catch(err => res.json({
            status: "Server Unavailable"
        }));
};


export const insertOne = (req, res) => {
    gameDAO.insertOne(req.body)
        .then(result => res.redirect('/'))
        .catch(err => {
            console.error(err);
            res.status(500).json({ status: 'Error en el servidor' });
        });
  };


  export const updateOne = (req, res) => {
    gameDAO
      .updateOne(req.params.barcode, req.body)
      .then((game) => {
        !game
          ? res.json({
              message: "Product not found",
            })
          : res.redirect("/");
      })
      .catch((err) => res.status(500).json({ status: "Server unavailable" }));
};


export const deleteOne = (req, res) => {
    gameDAO
        .deleteOne(req.params.barcode)
        .then((game) => {
            !game
                ? res.json({
                    message: "product not found"
                })
            : res.redirect("/");
        })
    .catch(err=>res.json({status: "Servidor no responde"}));
}


