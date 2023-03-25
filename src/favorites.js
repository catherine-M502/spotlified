import JsonStorage from "./lib/JsonStorage";

// Création d'un storage exprès pour les favoris
// L'idée est d'utiliser l'id de la chanson en tant que clé de stockage. Comme elle est unique dans toute l'app,
// pas de problème d'écrasement et cela permet de checker très facilement si une chanson est contenue ou non dans
// le storage. Exemple: favoritesStorage.getItem(song.id)
const favoritesStorage = new JsonStorage({
  name: "favorites",
  //moi : favoties_updated -> si on veut enlever un favori, qd la liste est modifiée , y a un event qui va popé ( et voir ensuite dans index.js)
  eventName: "favorites_updated",
});

// Cette fonction toggle une chanson au sein de la liste des favoris
const toggleFavorite = (song) => {
  if (isInFavorite(song)) {
    favoritesStorage.removeItem(song.id);
  } else {
    favoritesStorage.setItem(song.id, song);
  }
};

// Vérifie si une chanson est dans les favoris (retourne l'entry si oui, undefined si non)
const isInFavorite = (song) => {
  return favoritesStorage.getItem(song.id);
};

// Retourne la liste des favoris sous forme de tableau avec seulement la valeur (voir slides pour explication)
const getFavorites = () => {
  return favoritesStorage.toArray().map((e) => e[1]);
};

export { toggleFavorite, isInFavorite, getFavorites };
