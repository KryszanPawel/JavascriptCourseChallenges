library = [];
book1 = {
  title: "Harry Potter",
  author: "J.K.Rowling",
  status: {
    own: true,
    reading: false,
    read: false,
  },
};
book2 = {
  title: "Harry Metro 2033",
  author: "Dimitry Glukhovsky",
  status: {
    own: true,
    reading: false,
    read: false,
  },
};
book3 = {
  title: "Psy z rygi",
  author: "Henning Mankel",
  status: {
    own: true,
    reading: false,
    read: false,
  },
};

library.push(book1);
library.push(book2);
library.push(book3);

console.log(JSON.stringify(library));

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(JSON.stringify(library));

const { title: firstBook } = library[0];

console.log(firstBook);

console.log(library);
console.log(JSON.stringify(library));
