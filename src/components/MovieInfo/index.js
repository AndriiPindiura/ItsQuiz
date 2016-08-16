import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import css from './main.scss';

class MovieInfoComponent extends React.Component {
  render() {
    const actions = [
      <FlatButton
        label="Закрыть"
        onTouchTap={() => this.props.actions.selectMovie(null)}
      />,
    ];
    return (
      <Dialog
        className={css.movieinfo}
        title={this.props.movie.title}
        actions={actions}
        modal={false}
        open={this.props.movieInfo}
      >
        <p><strong>Год: </strong>{this.props.movie.releaseYear}</p>
        <p>
          <strong>Актеры: </strong>
          {this.props.movie.actors ? this.props.movie.actors.join(', ') : false}
        </p>
        <p><strong>Формат: </strong>{this.props.movie.videoType}</p>
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

export default withStyles(css)(MovieInfoComponent);
