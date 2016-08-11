'use strict';

import React, { PropTypes } from 'react';

// require('styles//Movies.css');

function MoviesComponent({ caption, actions }) {
  return (
    <div className="movies-component">
      {caption}
      <button onClick={actions.getMovies} />
      Please edit src/components///MoviesComponent.js to update this component!
    </div>
  );
}

MoviesComponent.displayName = 'MoviesComponent';

// Uncomment properties you need
MoviesComponent.propTypes = {
  caption: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
};
// MoviesComponent.defaultProps = {};

export default MoviesComponent;
