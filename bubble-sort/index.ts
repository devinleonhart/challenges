interface Book {
  name: string
}

const bookshelf: Book[] = [
  {name: 'A Tale of Two Cities'},
  {name: '1984'},
  {name: 'Brave New World'},
  {name: 'Animal Farm'},
  {name: 'Crime and Punishment'},
  {name: 'Cats Cradle'},
];

// Swap books at locations i and j.
function swapBooks(i:number, j:number, bookshelf:Book[]):Book[]{
  if(bookshelf[i] && bookshelf[j]) {
    const temp = bookshelf[j];
    bookshelf[j] = bookshelf[i];
    bookshelf[i] = temp;
  }

  return bookshelf;
}

function alphabeticBubbleSort(bookshelf:Book[]):Book[] {
  let i = 0;

  while(i !== bookshelf.length) {
    if(i+1 !== bookshelf.length && bookshelf[i].name > bookshelf[i + 1].name) {
      bookshelf = swapBooks(i, i+1, bookshelf);
      i = 0;
    }
    else {
      i++;
    }
  }

  return bookshelf;
}

console.log(alphabeticBubbleSort(bookshelf));
