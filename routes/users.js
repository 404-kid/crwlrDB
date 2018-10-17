const express = require('express');
const router = express.Router();

const queries = require('../queries');

router.get("/", (request, response, next) => {
    queries.list()
    .then(users => {
        response.json({users});
    }).catch(next);
});
router.get("/:band/band", (request, response, next) => {
    queries.getband(request.params.band)
    .then(users => {
        response.json({users});
    }).catch(next);
});
router.get("/creations", (request, response, next) => {
    queries.creations()
    .then(creations => {
        response.json({creations});
    }).catch(next);
});
router.get("/creations/:id", (request, response, next) => {
    queries.creation(request.params.id)
    .then(creations => {
        response.json({creations});
    }).catch(next);
});

router.get("/:username/creations", (request, response, next) => {
    queries.read(request.params.username).then(users => {
        users
            ? response.json({users})
            : response.status(404).json({message: 'Not found'})
    }).catch(next);
});

router.get("/:username", (request, response, next) => {
    queries.profile(request.params.username).then(users => {
        users
            ? response.json({users})
            : response.status(404).json({message: 'Not found'})
    }).catch(next);
});

router.post("/", (request, response, next) => {
    queries.create(request.body).then(users => {
        response.status(201).json({users});
    }).catch(next);
});

router.post("/creations", (request, response, next) => {
    queries.mkCreation(request.body).then(users => {
        response.status(201).json({users});
    }).catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.delete(request.params.id).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
});

router.put("/:username", (request, response, next) => {
    queries.update(request.params.username, request.body).then(users => {
        response.json({users});
    }).catch(next);
});

router.put("/:band", (request, response, next) => {
    queries.updateBand(request.params.band, request.body).then(users => {
        response.json({users});
    }).catch(next);
});

module.exports = router;
