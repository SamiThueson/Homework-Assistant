const router = require('express').Router();
const assignModel = require("../database/assignment-model")

// router.get('/', (req, res) => {
//   res.send("it worked");
// });

router.get('/assignment', assignModel.getAssignment);


module.exports = router;
