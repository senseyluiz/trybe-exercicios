const express = require('express');
const Author = require('./models/Author');
const { getAllBooks } = require('./models/Book');
const { AuthorId } = require('./models/middlewares/AuthorId');

const app = express();

app.get('/authors/:id?', AuthorId, async (req, res) => {
  const authors = await Author.getAll();
  const {id} = req.params;
  console.log(id);
  if(id){
    return res.status(200).json(authors.filter(author => author.id === +id))
  }
  return res.status(200).send(authors);
})

app.get('/books/:id?', async (req, res) => {
  const books = await getAllBooks(); 
  const {id} = req.params;
  const bkAuthor = books.filter(bok => bok.author_id === +id);
  console.log(bkAuthor);
  if(!id){
    return res.status(200).json(books)
  }
  return res.status(200).json(bkAuthor)
  
} )

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Executando na porta ${PORT}`))