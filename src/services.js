export function getFromLocal(name) {
  try {
    return JSON.parse(localStorage.getItem(name));
  } catch (error) {
    console.log(error);
  }
}

export function setToLocal(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}

export function findIndexOfCard(card, cards) {
  return cards.findIndex(item => item._id === card._id);
}
