import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import getImagesByQuery from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');

form.addEventListener('submit', submitHandler);

function submitHandler(e) {
  e.preventDefault();
  showLoader();

  const { ['search-text']: searchInput } = e.target.elements;

  getImagesByQuery(searchInput.value.trim())
    .then(({ data }) => {
      createGallery(data.hits);
    })
    .catch(error => {
      clearGallery();
      iziToast.error({
        message: error.message,
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
    });

  form.reset();
}
