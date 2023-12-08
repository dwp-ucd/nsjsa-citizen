const express = require('express');
const router = express.Router();

const BASE_PATH = 'design-ideas/wt-3073-signposting/wt-3073-signposting-version-2/11-availability';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const NEXT_PATH = '/design-ideas/wt-3073-signposting/wt-3073-signposting-version-2/check-answers';

// Redirect /education to first question in sequence
router.get('/', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/guard`);
});

router.post('/guard', function (req, res) {
  const answer = req.body.availability;

  if (typeof answer !== 'undefined') {
    if (answer === 'availability-yes') {
      res.redirect(`${ABS_BASE_PATH}/availability`);
    } else {
      res.redirect(NEXT_PATH);
    }
  } else {
    res.redirect(`${ABS_BASE_PATH}/guard`);
  }
});

router.post('/availability', function (req, res) {
  res.redirect(NEXT_PATH);
});

module.exports = router;
