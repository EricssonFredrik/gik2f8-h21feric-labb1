const BookInfo = (book) =>  {
  let html = `<div class="absolute border-900 border-2 bg-white right-20 rounded-[12px]" style="position:absolute;width:12vw" id="bookInfo">
                  <div class="inline-block">
                      <img class= "rounded-tl-lg rounded-tr-lg" src="${book.coverImage}" alt="No pic for:" + "${book.title}">
                      <h4 class="text-gray-900 text-xl font-medium mb-2">${book.title}</h4>
                      <p class="text-gray-700"> Author: ${book.author}</p>
                      <p class="text-gray-700"> Pages: ${book.pages}</p>
                      <p class="text-gray-700">Release date: ${book.releaseDate}</p>
                  </div>
            </div>`;

  return html;

};