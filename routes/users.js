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

// router.get("/:band/band", (request, response, next) => {
//     queries.getband(request.params.band)
//     .then(users => {
//         response.json({users});
//     }).catch(next);
// });
// router.get("/creations", (request, response, next) => {
//     queries.creations()
//     .then(creations => {
//         response.json({creations});
//     }).catch(next);
// });
// router.get("/creations/:id", (request, response, next) => {
//     queries.creation(request.params.id)
//     .then(creations => {
//         response.json({creations});
//     }).catch(next);
// });
//
// router.get("/:username/creations", (request, response, next) => {
//     queries.read(request.params.username).then(users => {
//         users
//             ? response.json({users})
//             : response.status(404).json({message: 'Not found'})
//     }).catch(next);
// });



//
// router.post("/creations", (request, response, next) => {
//     queries.mkCreation(request.body).then(users => {
//         response.status(201).json({users});
//     }).catch(next);
// });

// router.delete("/:id", (request, response, next) => {
//     queries.delete(request.params.id).then(() => {
//         response.status(204).json({deleted: true});
//     }).catch(next);
// });
//
// router.put("/:username", (request, response, next) => {
//     queries.update(request.params.username, request.body).then(users => {
//         response.json({users});
//     }).catch(next);
// });
//
// router.put("/:band", (request, response, next) => {
//     queries.updateBand(request.params.band, request.body).then(users => {
//         response.json({users});
//     }).catch(next);
// });

module.exports = router;
