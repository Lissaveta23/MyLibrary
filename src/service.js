const dataBooks = [
  {
    id: 1, 
    title: "Евгений Онегин",
    author: "Пушкин А.С.",
    pages: 234,
    year: 1833,
  },
  {
    id: 2, 
    title: "Война и мир",
    author: "Толстой Л.Н.",
    pages: 1200,
    year: 1863,
  },
  {
    id: 3, 
    title: "Преступление и наказание",
    author: "Достоевский Ф.М.",
    pages: 331,
    year: 1866,
  },
  {
    id: 4, 
    title: "Идиот",
    author: "Достоевский Ф.М.",
    pages: 348,
    year: 1869,
  },
  {
    id: 5, 
    title: "Тимур и его команда",
    author: "Гайдар А.П.",
    pages: 70,
    year: 1940,
  },
  {
    id: 6, 
    title: "Бедная Лиза",
    author: "Карамзин Н.М.",
    pages: 10,
    year: 1792,
  },
  {
    id: 7, 
    title: "Горе от ума",
    author: "Грибоедов А.С.",
    pages: 521,
    year: 1824,
  },
  {
    id: 8, 
    title: "Мертвые души",
    author: "Гоголь Н.В.",
    pages: 352,
    year: 1835,
  }
]

const separatorBooks = (books) => {
  let size;
  document.documentElement.scrollWidth > 660 ? size=5 : size=3;
  const newArray = [];
  for(let i=0; i < books.length; i+=size){
      newArray.push(books.slice(i, i+size));
  }
  return newArray
}

const removeBook = (id, books) => {
    return books.filter((book) => book.id !== id);
}

const sortBooks = (e, books) =>{
  e.preventDefault();
  if(e.target.name === "titleBook"){
    return books.sort((first, second) => first.title.localeCompare(second.title));
  } else {
    return books.sort((first, second) => first.author.localeCompare(second.author))
  }
}

const addUpdateBook = (newBook, books) => {
  const index = books.findIndex(book => book.id === newBook.id);
  if(index !== -1){
    const newBooks = [...books];
    newBooks[index] = newBook;
    return newBooks;
  } else return [...books, newBook];
}

export { sortBooks, addUpdateBook, removeBook, separatorBooks, dataBooks};