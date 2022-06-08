const conection = require('./conection');

const getAll = async () => {
  const serialize = (authorData) => ({
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name,
  })

  const [authors] = await conection.execute(
    "SELECT id, first_name, middle_name, last_name FROM model_example.authors;"
    );
  return authors.map(serialize);
}

const getByAuthorId = async (id) => {
  const [authors] = await conection.execute(
    "SELECT id, first_name, middle_name, last_name FROM model_example.authors;"
    );

  const authorId = authors.filter((author) => id === authorId);
  return authorId;
}

module.exports = {
  getAll,
  getByAuthorId,
}