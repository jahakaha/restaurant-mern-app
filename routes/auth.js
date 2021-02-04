const express = require('express');
// const { Signin } = require('../client/src/components/Signin');
const router = express.Router();
const { signUpValidator, signinValidator, validatorResult } = require('../middleware/validator')
const { signupController, signinController } = require('../controllers/auth');


router.post('/signup', signUpValidator, validatorResult, signupController);
router.post('/signin', signinValidator, validatorResult, signinController);

module.exports = router;
