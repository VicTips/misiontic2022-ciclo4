let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Servicio Model
let servicioSchema = require('../models/Servicio');

// CREATE Servicio
router.route('/create-servicio').post((req, res, next) => {
  servicioSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ Servicio
router.route('/').get((req, res, next) => {
  servicioSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
    }
  })
})

// Get Single Servicio
router.route('/edit-servicio/:id').get((req, res, next) => {
  servicioSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
    }
  })
})


// Update Servicio
router.route('/update-servicio/:id').put((req, res, next) => {
  servicioSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      //console.log(error)
    } else {
      res.json(data)
      console.log('Servicio updated successfully!')
    }
  })
})

// Delete Servicio
router.route('/delete-servicio/:id').delete((req, res, next) => {
  servicioSchema.findByIdAndRemove(req.params.id, (error, data) => {
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