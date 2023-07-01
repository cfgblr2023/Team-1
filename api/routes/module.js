const router = require("express").Router();
const Module = require("../models/module");
const AspModuleRel = require("../models/relAspModule");

//gets all modules of a aspiration
router.post("/getModules", async (req, res) => {
  AspModuleRel.findOne({ name: req.body.name }, async (err, modules) => {
    if (err) {
      res.status(500).json({
        message: { msgBody: "Some error has occured", msgError: true },
      });
    }

    const modul = [];
    for (let idx = 0; idx < modules.modules.length; idx++) {
      const mod = await Module.findById(modules.modules[idx]);
      modul.push(mod);
    }

    return res.status(200).json(modul);
  });
});

router.post("/addModule", async (req, res) => {
  try {
    const newModule = new Module(req.body);
    const response = await newModule.save();

    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
