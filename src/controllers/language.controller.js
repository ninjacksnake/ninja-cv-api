const { Language } = require("../db/models/index");

module.exports.create = async function (req, res, next) {
  try {
    const data = req.body;
    const newLanguage = new Language({
      name: data.Languagename,
      email: data.email,
      password: data.password,
      enabled: true,
    });
    await newLanguage.save();
    return res.status(201).json(newLanguage);
  } catch (error) {
    console.log(error);
   return res.status(500).json({ error: "Failed to create language." });
  }
};

module.exports.update = async function (req, res, next) {
  try {
    const data = req.body;
    const languageId  = req.params.id;
    const language = await Language.findById(languageId);
    if(!Language) {
    return  res.status(500).json({ error: "Language not found." });
    }
    await language.updateLanguage(data);
    res.status(200).json(language);
  } catch (error) {
    console.log(error);
  return  res.status(500).json({ error: "Failed to update language." });
  }
};


module.exports.find = async function (req, res, next){
  try {
    let language;
    const languageId = req.params.id;
    if (languageId) {
        language = await Language.findById(languageId);
        return res.status(200).json(Language);
    }
    language = await Language.find()
    if(language.length === 0){
      return res.status(500).json({message : 'Language not found'});
    }
    return res.status(200).json(language);
  } catch (error) {
    console.log(error);
   return res.status(500).json({ error: "Failed to find an language." });
  }
}
