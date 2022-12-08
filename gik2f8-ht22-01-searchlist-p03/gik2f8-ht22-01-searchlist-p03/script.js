'use strict';

let bookList = [];

window.addEventListener('load', () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});


searchField.addEventListener('keyup', (e) =>
  renderBookList(
    bookList.filter(({ title, author }) => {
      const searchTerm = e.target.value.toLowerCase();
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
  )
);


function renderBookList(bookList) {
  let existingBookItem = document.getElementById("bookInfo");
  const existingElement = document.querySelector('.book-list');
  const root = document.getElementById('root');
  existingBookItem && bookList.length == 10 && existingBookItem.remove();
  existingElement && root.removeChild(existingElement);
  bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList));

  const books = document.querySelectorAll('.book-list__item');

  books.forEach(book => {
    book.addEventListener('mouseover', (e) => renderBookDetails(e));
  })
};


async function renderBookDetails(e) {

  const root = document.getElementById('root');
  let details = await getInfo(e.target.id);
  root.insertAdjacentHTML('beforeend', BookInfo(details));

  e.target.addEventListener("mouseout",(e) =>{
    let existingElement = document.getElementById("bookInfo");
    existingElement && existingElement.remove(); 
});
}