import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import css from './main.scss';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class CreateMovieComponent extends React.Component {
  constructor(props) {
    super(props);
    this.importFileDialog = this.importFileDialog.bind(this);
    this.setFile = this.props.actions.setFile.bind(this);
    this.addMovie = this.props.actions.addMovie.bind(this, this.props.movies.movie);
    this.editFirstActor = this.props.actions.addMovieActor.bind(this, 0);
    this.editSecondActor = this.props.actions.addMovieActor.bind(this, 1);
    this.editThirdActor = this.props.actions.addMovieActor.bind(this, 2);
    this.editFourActor = this.props.actions.addMovieActor.bind(this, 3);
  }
  componentDidMount() {
    this.props.actions.setYears();
  }
  componentWillUpdate() {
    this.addMovie = this.props.actions.addMovie.bind(this, this.props.movies.movie);
  }
  importFileDialog() {
    this.refs.file.click();
  }
  importMovies(input) {
    this.props.actions.setFile(input);
    this.refs.file.value = '';
  }
  render() {
    const actions = [
      <input
        type="file"
        ref="file"
        style={{ display: 'none' }}
        onChange={this.setFile}
      />,
      <FlatButton
        label="ИМПОРТ С ФАЙЛА"
        primary
        labelStyle={{
          fontFamily: 'Roboto-Regular',
          fontSize: '10px',
          color: '#3c91f2',
        }}
        // keyboardFocused
        onTouchTap={this.importFileDialog}
      />,
      <FlatButton
        label="ОТМЕНА"
        labelStyle={{
          fontFamily: 'Roboto-Regular',
          fontSize: '10px',
          color: '#4a4a4a',
        }}
        // primary
        // keyboardFocused
        onTouchTap={this.props.actions.createMovieDialog}
      />,
      <FlatButton
        label="ДОБАВИТЬ"
        labelStyle={{
          fontFamily: 'Roboto-Regular',
          fontSize: '10px',
          color: '#3c91f2',
        }}
        primary
        onTouchTap={this.addMovie}
      />,
    ];
    return (
      <Dialog
        title="Добавление фильма"
        contentStyle={{
          maxWidth: '50%',
        }}
        titleStyle={{
          margin: '0 11px',
          fontFamily: 'Roboto-Regular',
          fontSize: '16px',
          color: '#4a4a4a',
        }}
        actions={actions}
        modal={false}
        open={this.props.movies.createMovieDialog}
        autoDetectWindowHeight={false}
        // onRequestClose={this.handleClose}
      >
        <section className={css.createmovie}>
          <h3>Информация о фильме</h3>
          <div>
            <input placeholder="Название фильма" onChange={this.props.actions.setMovieTitle} />
            <select defaultValue="Год выпуска" onChange={this.props.actions.setMovieYear}>
              <option disabled value="Год выпуска">Год выпуска</option>
              {this.props.movies.years.map((year, index) =>
                <option key={index} value={year}>{year}</option>
              )}
            </select>
            <select defaultValue="Качество" onChange={this.props.actions.setMovieVideoType}>
              <option disabled value="Качество">Качество</option>
              {this.props.movies.videoTypes.map((type, index) =>
                <option key={index} value={type}>{type}</option>
              )}
            </select>
          </div>
          <h3>Актеры</h3>
          <div>
            <input
              placeholder="Имя и фамилия актера"
              onChange={this.editFirstActor}
            />
            <input
              placeholder="Имя и фамилия актера"
              onChange={this.editSecondActor}
            />
            <input
              placeholder="Имя и фамилия актера"
              onChange={this.editThirdActor}
            />
            <input
              placeholder="Имя и фамилия актера"
              onChange={this.editFourActor}
            />
          </div>
        </section>
      </Dialog>
    );
  }
}

CreateMovieComponent.displayName = 'CreateMovieComponent';

// Uncomment properties you need
CreateMovieComponent.propTypes = {
  movies: PropTypes.object.isRequired,
  // id: PropTypes.string.isRequired,
  // movies: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};
// CreateMovieComponent.defaultProps = {};

export default withStyles(css)(CreateMovieComponent);
