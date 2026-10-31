interface FavouritesListProps {
    favouriteObjectType: string;
    favourites: string[];
}


export default function FavouritesList({ favouriteObjectType, favourites }: FavouritesListProps) {
    return (
        <section className="bg-gray-100 p-4 my-10 rounded-lg shadow-md w-xl mx-auto">
            <h3 className="text-lg font-bold mb-2 text-gray-800">Favourite {favouriteObjectType}:</h3>
      <ul className="list-disc list-inside">
        {favourites.map((favourite, index) => (
          <li key={index} className="text-gray-700">{favourite}</li>
        ))}
    </ul>
      </section>
    )
}