import React from 'react';

const TrendSuggestions = ({ suggestions, onAddToWishlist }) => {
  return (
    <div className="trend-suggestions">
      {suggestions.map((suggestion) => (
        <div key={suggestion.id} className="suggestion">
          <span>{suggestion.name}</span>
          <button onClick={() => onAddToWishlist(suggestion.id)}>Add to Wishlist</button>
        </div>
      ))}
    </div>
  );
};

export default TrendSuggestions;
