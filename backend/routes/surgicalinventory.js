const router = require("express").Router();
let Surgicalinventory = require("../models/surgicalinventory.model");

//get all inventories
router.route("/").get((req, res) => {
    Surgicalinventory.find()
        .then((Surgicalinventory) => res.json(Surgicalinventory))
        .catch((err) => res.status(400).json("Error: " + err));
});

//add a inventory - won't add
router.route("/add").post((req, res) => {
    const name = req.body.name;
    const quantity = req.body.quantity;
    const from = req.body.from;
    const balance = req.body.balance;
    const date = req.body.date;

    const newSurgicalinventory = new Surgicalinventory({
        name,
        quantity,
        from,
        balance,
        date,
    });

    newSurgicalinventory
        .save()
        .then(() => res.json("inventory added!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

//update a inventory
router.route('/update/:id').post((req, res) => {
    Surgicalinventory.findById(req.params.id)
      .then(Surgicalinventory => {

        Surgicalinventory.name = req.body.name;
        Surgicalinventory.quantity = req.body.quantity;
        Surgicalinventory.from = req.body.from;
        Surgicalinventory.balance = req.body.balance;
        Surgicalinventory.date = req.body.date;
        
        Surgicalinventory.save()
          .then(() => res.json('surgical inventory updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
//delete a inventory
router.route('/:id').delete((req, res) => {
    Surgicalinventory.findByIdAndDelete(req.params.id)
      .then(() => res.json('data deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').get((req, res) => {
    Surgicalinventory.findById(req.params.id)
      .then( Surgicalinventory => res.json( Surgicalinventory))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;