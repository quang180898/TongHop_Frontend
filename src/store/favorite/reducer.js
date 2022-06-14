import { favoriteAction } from "store/actions";

const initialState = {
    favorites: JSON.parse(localStorage.getItem("favorites")) || [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case favoriteAction.ADD_TO_FAVORITE:
            const data = action.params;

            const favorites = [].concat(state.favorites);

            // If an item isn't already a favorite, create one and push it to the array; otherwise remove it from the array
            if (favorites.filter((p) => p.shoes_id === data.shoes_id).length !== 1) {
                favorites.push(data);
            } else {
                const index = favorites.indexOf(
                    favorites.filter((item) => item.shoes_id === data.shoes_id)[0]
                );
                favorites.splice(index, 1);
            }

            // Setting the new state and saving favorites in localStorage
            localStorage.setItem("favorites", JSON.stringify(favorites));
            return {
                favorites: favorites,
            };

        default:
            return state;
    }
};
