const router = require("express").Router();
let Generalinventory = require("../models/generalinventory.model");

//get all inventories
router.route("/").get((req, res) => {
    Generalinventory.find()
        .then((Generalinventory) => res.json(Generalinventory))
        .catch((err) => res.status(400).json("Error: " + err));
});

//add an inventory - won't add
router.route("/add").post((req, res) => {
    const name = req.body.name;
    const quantity = req.body.quantity;
    const from = req.body.from;
    const balance = req.body.balance;
    const date = req.body.date;


    const newGeneralinventory = new Generalinventory({
        name,
        quantity,
        from,
        balance,
        date,
    });

    newGeneralinventory
        .save()
        .then(() => res.json("inventory added!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

//update a inventory
router.route('/update/:id').post((req, res) => {
    Generalinventory.findById(req.params.id)
      .then(Generalinventory => {
        
        Generalinventory.name = req.body.name;
        Generalinventory.quantity = req.body.quantity;
        Generalinventory.from = req.body.from;
        Generalinventory.balance = req.body.balance;
        Generalinventory.date = req.body.date;
       
        Generalinventory.save()
          .then(() => res.json('general inventory updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

//delete a inventory
router.route('/:id').delete((req, res) => {
    Generalinventory.findByIdAndDelete(req.params.id)
      .then(() => res.json('data deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').get((req, res) => {
    Generalinventory.findById(req.params.id)
      .then( Generalinventory => res.json( Generalinventory))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;