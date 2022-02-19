const key = "@ballerini-devs-gabito"

// Buscar os itens salvos
export async function getSavedItems() {
  const myItems = await localStorage.getItem(key)

  let savedItems = JSON.parse(myItems) || [];

  return savedItems
}

// Salvar um item no localStorage

export async function saveItem(newItem) {
  let savedItems = await getSavedItems(key);

  // Adicionar novo item na lista
  savedItems.push(newItem)
  await localStorage.setItem(key, JSON.stringify(savedItems));
}

// Deletar algum link salvo.
export async function deleteItem(gituser) {
  
  let savedItems = await getSavedItems(key);

  let myItems = savedItems.filter((item) => item.gituser !== gituser);

  localStorage.setItem(key, JSON.stringify(myItems));

  return myItems;
}

export async function editItem(newItem, id) {
  let savedItems = await getSavedItems(key);

  // Adicionar novo item na lista
  savedItems.splice(id, 1, newItem);
  await localStorage.setItem(key, JSON.stringify(savedItems));
}