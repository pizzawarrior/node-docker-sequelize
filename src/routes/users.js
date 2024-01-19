/*
This appears to be boilerplate, with no actual purpose. Either modify this and use INET, or delete it
*/

import { Router } from "express";

var router = Router();

/* GET users listing. */
router.get("/", function (req, res) {
  res.send("respond with a resource");
});

export default router;
