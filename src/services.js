export async function getCards() {
  const res = await fetch("/cards");
  return await res.json();
}

export function postCard(data) {
  return fetchCard("POST", data);
}

export function patchCard(data, id) {
  return fetchCard("PATCH", data, id);
}

export function handleDeleteCard(data, id) {
  return fetchCard("DELETE", data, id);
}

async function fetchCard(method, data, id = "") {
  const res = await fetch("/cards/" + id, {
    method,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  return await res.json();
}

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
