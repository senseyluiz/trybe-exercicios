const { getByAuthorId } = require("../Author");

module.exports.AuthorId = (req, res, next) => {
  const {id} = req.params;
  if(!id){
    res.status(400).json({message:"Não foi possível encontrar autor com este id"});
  return;
  }  

  next();
}