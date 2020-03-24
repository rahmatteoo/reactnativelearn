let currentID = 0;

export function addContact(contact) {
  const { name, phone } = contact;
  currentID += 1;

  return {
    type: "ADD_CONTACT",
    id: currentID,
    name,
    phone
  };
}

export function removeContact(id) {
  return {
    type: "REMOVE_CONTACT",
    id
  };
}

export function passingData(){
  const{book_id, title, author, sinopsis, cover} = dataDiri;

  return {
    type: "PASSING_DATA",
    book_id,
    title,
    author,
    sinopsis,
    cover
  }
}