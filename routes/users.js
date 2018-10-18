const express = require('express')
const router = express.Router()

const queries = require('../queries')

router.get("/test/profiles", (request, response, next) => {
    queries.testProfiles()
    .then(media => {
        response.json({media})
    }).catch(next)
});

router.get("/test/media", (request, response, next) => {
    queries.testMedia()
    .then(media => {
        response.json({media})
    }).catch(next)
});

router.get("/:location", (request, response, next) => {
    queries.localMedia(request.params.location)
    .then(users => {
        response.json({users})
    }).catch(next)
});

router.get("/profile/:userid", (request, response, next) => {
  queries.profile(request.params.userid)
  .then(users => {
    users
    ? response.json({users})
    : response.status(404).json({message: 'Not found'})
  }).catch(next)
});

router.get("/login/:email/:password", (request, response, next) => {
  queries.login(request.params.email, request.params.password)
  .then(users => {
    users[0]!== undefined
    ? response.json({users})
    : response.status(404).json({message: 'false'})
  }).catch(next)
})

router.post("/media", (request, response, next) => {
    queries.create(request.body).then(users => {
        response.status(201).json({users});
    }).catch(next);
});

router.post("/profile", (request, response, next) => {
    queries.newProfile(request.body).then(users => {
        response.status(201).json({users});
    }).catch(next);
});

module.exports = router;
