import API from './webApi_service';
import { url_base } from './Url_base';

export const importAnimes = async (param) => {
  try {
    return await API.get(`${url_base}animes`, param).then(
      (response) => {
        return response.data;
      },
      (error) => {
        console.log(error);
        return null;
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const searchAnime = async (name) => {
  try {
    return await API.get(`${url_base}animes/?q=${name}`).then((response) => {
      return response.data;
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const addToListAnime = async (params) => {
  try {
    return await API.post(`${url_base}/listAnimeUser`, params).then((response) => {
     return response.data;
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};


export const searchAnimeId = async (id) => {
  try {
    return await API.get(`${url_base}animes/?q=${id}`).then((response) => {
      return response.data;
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};


export const importListAnimeUser = async (params) => {
  try {
    return await API.get(`${url_base}/listAnimeUser`, params).then(
      (response) => {
        response.data;
      }
    );
  } catch (error) {
    console.log(error);
    return null;
  }
};


export const updateProgressAnime = async (id, params) => {
  try {
    return await API.put(`${url_base}listAnimeUser/${id}`, params).then(
      (response) => {
        response.data;
      }
    );
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const searchUserListAnime = async (params) => {
  try {
    return await API.get(`${url_base}listAnimeUser`, params).then((response) => {
      return response.data;
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};
