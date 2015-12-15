import fetch from 'isomorphic-fetch';
import { normalize, Schema, arrayOf } from 'normalizr';

const repository = new Schema('repositories');
const user = new Schema('users');

repository.define({
  owner: user,
});

const githubApi = 'https://api.github.com';

const getYesterday = () => {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  const month = date.getMonth() + 1;
  return [
    date.getFullYear(),
    month < 10 ? '0' + month : month,
    date.getDate() < 10 ? '0' + date.getDate() : date.getDate(),
  ].join('-');
};

export const searchRepository = (query = '', language = 'javascript', created = getYesterday(), sort = 'stars', order = 'desc') => {
  return fetch(githubApi + `/search/repositories?q=${query} created:${created} language:${language}&sort=${sort}&order=${order}`)
  .then((response) => response.json())
  .then((body) => {
    return new Promise((resolve) => {
      // Resolve with results formatted by normalizr
      resolve(Object.assign({}, normalize(body, {items: arrayOf(repository)}), {
        queries: {
          searchString: query,
          language,
          created,
          sort,
          order,
        },
      }));
    });
  });
};
