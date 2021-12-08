let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Usuario Model
let usuarioSchema = require('../models/Usuario');

// CREATE Usuario
router.route('/create-usuario').post((req, res, next) => {
  usuarioSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ Usuarios
router.route('/').get((req, res, next) => {
  usuarioSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
    }
  })
})

// Get Single Usuario
router.route('/edit-usuario/:id').get((req, res, next) => {
  usuarioSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
    }
  })
})


// Update Usuario
router.route('/update-usuario/:id').put((req, res, next) => {
  usuarioSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      //console.log(error)
    } else {
      res.json(data)
      console.log('Usuario updated successfully!')
    }
  })
})

// Delete Usuario
router.route('/delete-usuario/:id').delete((req, res, next) => {
  usuarioSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;