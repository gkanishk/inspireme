import authorsData from './authors.json';

export const authors = () => new Promise(res => res(authorsData))
  export const authorsQuotes = (id) => new Promise(res => {
    const authorDetails = authorsData.find((quote) => parseInt(quote.id) === parseInt(id));
    res(authorDetails)}
  );
