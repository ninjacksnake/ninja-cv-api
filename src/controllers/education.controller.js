const { Education } = require("../db/models/index");

module.exports.create = async function (req, res, next) {
  console.log("create education");
  try {
    const data = req.body;
    console.log(data);
    const newEducation = new Education({
      institutionName: data.institution,
      institutionUrl: data.email,
      startDate: data.startDate,
      endDate: data.endDate,
      educationType: data.degree,
      profileId: data.profileId,
      country: data.country,
      city: data.city,
      status: data.status,
      profileId: data.profileId,
    });
    await newEducation.save();
    return res.status(201).json(newEducation);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to create education." });
  }
};

module.exports.update = async function (req, res, next) {
  console.log("Hit update education line 22");
  try {
    const data = req.body;
    const educationId = req.params.id;
    const education = await Education.findOne(educationId);
    if (!Education) {
      return res.status(500).json({ error: "Education not found." });
    }
    await education.updateEducation(data);
    res.status(200).json(education);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to update education." });
  }
};

module.exports.delete = async function (req, res, next) {
  console.log("Hit remove education line 22");
  try {
    const educationId = req.params.id;
    const deletedEducation = await Education.findOneAndDelete(educationId);
    // status code for deleted record
    if (!deletedEducation) {
      return res.status(500).json({ error: "Education not found." });
    }
    return res.status(200).json(education);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to remove education." });
  }
};

module.exports.find = async function (req, res, next) {
  //console.log(req)
  try {
    let education;
    const profileId = req.params.id;
    switch (profileId.length > 0) {
      case true:
        education = await Education.find({ profileId: profileId });
        if (education.length === 0) {
          return res.status(500).json({ message: "Education not found" });
        }
        return res.status(200).json(education);
      case false:
        education = await Education.find();
        return res.status(200).json(education);
    }
  } catch (error) {
    //   console.log(error);
    //  return res.status(500).json({ error: "Failed to find an education." });
  }
};
