import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import css from './main.scss';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class CreateMovieComponent extends React.Component {
  componentDidMount() {
    this.props.actions.setYears();
  }
  render() {
    const actions = [
      <input
        type="file"
        ref="file"
        style={{ display: 'none' }}
        onChange={e => this.props.actions.setFile(e)}
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
        onTouchTap={() => this.refs.file.click()}
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
        // onTouchTap={this.addMovie}
        onTouchTap={() => { this.props.actions.addMovie(this.props.movies.movie); }}
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
              onChange={e => this.props.actions.addMovieActor(0, e)}
            />
            <input
              placeholder="Имя и фамилия актера"
              onChange={e => this.props.actions.addMovieActor(1, e)}
            />
            <input
              placeholder="Имя и фамилия актера"
              onChange={e => this.props.actions.addMovieActor(2, e)}
            />
            <input
              placeholder="Имя и фамилия актера"
              onChange={e => this.props.actions.addMovieActor(3, e)}
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
