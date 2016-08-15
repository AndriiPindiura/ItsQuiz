import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class MovieInfoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.closeDialog = this.props.actions.selectMovie.bind(this, null);
  }
  // componentWillUpdate() {
  //   this.removeMovie = this.props.actions.removeMovie.bind(this, this.props.id);
  // }
  // removeMovie() {
  //   this.props.actions.removeMovie(this.props.id);
  // }
  render() {
    const actions = [
      <FlatButton
        label="Закрыть"
        onTouchTap={this.closeDialog}
      />,
    ];
    return (
      <Dialog
        title={this.props.movie.title}
        actions={actions}
        modal={false}
        open={this.props.movieInfo}
      >
        <p>{this.props.movie.releaseYear}<span>{this.props.movie.videoType}</span></p>
        <p>{this.props.movie.actors ? this.props.movie.actors.join(', ') : false}</p>
      </Dialog>
    );
  }
}

MovieInfoComponent.displayName = 'MovieInfoComponent';

// Uncomment properties you need
MovieInfoComponent.propTypes = {
  movie: PropTypes.object.isRequired,
  movieInfo: PropTypes.bool.isRequired,
  // movies: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};
// ConfirmDeleteComponent.defaultProps = {};

export default MovieInfoComponent;
