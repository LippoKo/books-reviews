const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const db = mysql.createPool({
  host: 'mysql_db',
  user: 'MYSQL_USER',
  password: 'MYSQL_PASSWORD',
  database: 'books',
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hi there are you sure');
});

//get the books
app.get('insert', (req, res) => {
  const bookName = req.body.setBookName;
  const bookReview = req.body.setReview;
  const insertQuery =
    'INSERT INTO books_reviews (book_name, book_review) VALUES (?, ?)';
  db.query(insertQuery, [bookName, bookReview], (err, result) => {
    console.log(result);
  });
});

//delete a book
app.delete('/delete/:bookId', (req, res) => {
  const bookId = req.params.bookId;
  const DeleteQuery = 'DELETE FROM books_reviews WHERE id = ?';
  db.query(DeleteQuery, bookId, (err, result) => {
    if (err) console.log(err);
  });
});

//update a book review
app.put('/update/:bookId', (req, res) => {
  const bookReview = req.body.reviewUpdate;
  const bookId = req.params.bookId;
  const UpdateQuery = 'UPDATE books_reviews SET book_review = ? WHERE id = ?';
  db.query(UpdateQuery, [bookReview, bookId], (err, result) => {
    if (err) console.log(err);
  });
});

app.listen('3001', () => {});
