import defaultImg from 'images/default.jpg';

export function imagePicker(path) {
  return path ? `https://image.tmdb.org/t/p/w300${path}` : defaultImg;
}
