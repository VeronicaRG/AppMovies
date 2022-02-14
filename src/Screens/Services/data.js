import api from '.';

const getData = async (setData, url) => {
  const result = await api.get(url);
  setData(result.data.results);
};

const getGenre = async (setGenre, url) => {
  const result = await api.get(url);
  console.log(result);
  setGenre(result.data.genres);
};

export {getData, getGenre};
