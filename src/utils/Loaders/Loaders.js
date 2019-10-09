import React from 'react';

import searchLoader from 'img/search_loader.gif';

export function SearchLoader() {
  return (
    <div className="search-loader-bg">
      <img src={searchLoader} alt="places loader" />
    </div>
  );
}
