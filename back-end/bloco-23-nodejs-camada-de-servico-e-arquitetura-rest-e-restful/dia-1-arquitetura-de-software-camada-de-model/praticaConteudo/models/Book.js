const conection = require('./conection');

const getAllBooks = async () => {
  const [ books ] = await conection.execute(
    "SELECT * from model_example.books;"
  )
  return books;
}

module.exports = {
  getAllBooks,
}