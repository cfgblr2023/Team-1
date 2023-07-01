const router = require("express").Router();
const User = require("../models/User");
const Mentor = require("../models/mentor");
const Mentee = require("../models/mentee");

const bcrypt = require("bcrypt"); //used to generate hash for passwords

//REGISTER
router.post("/register", async (req, res) => {
  const { email, password, name, role } = req.body;

  User.findOne({ email }, async (err, user) => {
    if (err) {
      res.status(500).json({
        message: { msgBody: "Some error has occured", msgError: true },
      });
    }

    if (user) {
      res
        .status(400)
        .json({ message: { msgBody: "Email already in use", msgError: true } });
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(password, salt);
      try {
        const newUser = new User({
          name: name,
          email: email,
          password: hashedPass,
          role: role,
        });

        const user = await newUser.save();

        if (role == "mentee") {
          const { language, education, aspiration, collegeName } = req.body;
          const newMentee = new Mentee({
            email: email,
            language: language,
            education: education,
            aspiration: aspiration,
            collegeName: collegeName,
          });

          await newMentee.save();
        } else {
          const { language, skills } = req.body;
          const newMentor = new Mentor({
            email: email,
            language: language,
            skills: skills,
          });

          await newMentor.save();
        }
        res.status(200).json({
          message: {
            msgBody: "Account Successfully Created",
            msgError: false,
          },
        });
      } catch (err) {
        res.status(500).json({
          message: { msgBody: "Some error has occured", msgError: true },
        });
      }
    }
  });
});

module.exports = router;
