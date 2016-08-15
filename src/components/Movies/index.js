import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import css from './main.scss';
import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn }
  from 'material-ui/Table';


// require('styles//Movies.css');

class MoviesComponent extends React.Component {
  constructor(props) {
    super(props);
    this.filterMovies = this.filterMovies.bind(this);
    this.movieSelect = this.movieSelect.bind(this);
  }
  componentDidMount() {
    this.props.actions.getMovies();
  }
  filterMovies(input) {
    this.props.actions.filterMovies(input.target.value);
  }
  removeMovie(id, e) {
    e.stopPropagation();
    // e.nativeEvent.stopImmediatePropagation();
    this.props.actions.confirmRemove(id);
  }
  movieSelect(index) {
    this.props.actions.selectMovie(this.props.movies.movies[index]);
  }
  render() {
    const addMovieStyle = {
      position: 'absolute',
      top: '36px',
      right: '62px',
    };
    const appBarStyle = {
      background: '#3C91F2',
    };
    const wrapStyle = {
      display: 'block',
      padding: '20px',
    };
    return (
      <section className={css.movies}>
        <AppBar
          style={appBarStyle}
          title={
            <header>
              <h2>MyMovies</h2>
              <input
                placeholder="Ищите фильм по названию или актеру"
                value={this.props.movies.searchKeyWord}
                onChange={this.filterMovies}
              />
            </header>}
          iconElementRight={
            <FloatingActionButton
              secondary
              style={addMovieStyle}
              onClick={this.props.actions.createMovieDialog}
            >
              <ContentAdd />
            </FloatingActionButton>
          }
          showMenuIconButton={false}
        />
        <Table
          wrapperStyle={wrapStyle}
          onRowSelection={this.movieSelect}
        >
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow>
              <TableHeaderColumn style={{ width: '10%' }} tooltip="ID">ID</TableHeaderColumn>
              <TableHeaderColumn tooltip="ФИЛЬМ">ФИЛЬМ</TableHeaderColumn>
              <TableHeaderColumn tooltip="АКТЕРЫ">АКТЕРЫ</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
            deselectOnClickaway={false}
            showRowHover
            stripedRows={false}
          >
          {this.props.movies.movies && this.props.movies.movies.length > 0
            ? this.props.movies.movies.map((row, index) => (
              <TableRow
                key={index}
                value={row._id}
                selected={this.props.movies.selectedMovie._id
                  && this.props.movies.selectedMovie._id === row._id}
              >
                <TableRowColumn style={{ width: '10%' }}><span>#{row._id}</span></TableRowColumn>
                <TableRowColumn>
                  <h3>{row.title}</h3>
                  <span>{row.releaseYear} {row.videoType}</span>
                </TableRowColumn>
                <TableRowColumn style={{ whiteSpace: 'pre-wrap' }}>
                  <div>
                    <span>{row.actors
                      ? row.actors.filter(actor => actor && actor.length > 0)
                      .join(', ') : null}</span>
                    <button
                      onClick={this.removeMovie.bind(this, row._id)}
                    >
                      <svg width="12px" height="12px" viewBox="0 0 12 12">
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          <g id="MyMovies" transform="translate(-960.000000, -131.000000)">
                            <g id="Moview" transform="translate(35.000000, 118.000000)">
                              <g id="ic_remove" transform="translate(922.000000, 10.000000)">
                                <path
                                  d="M0,0 L18,0 L18,18 L0,18 L0,0 Z M0,0 L18,0 L18,18 L0,18 L0,0 Z"
                                  id="Shape"
                                />
                                <polygon
                                  id="Shape"
                                  fill="#9B9B9B"
                                  points="14.53 4.53 13.47 3.47 9 7.94 4.53 3.47 3.47 4.53 7.94 9 3.47 13.47 4.53 14.53 9 10.06 13.47 14.53 14.53 13.47 10.06 9"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </button>
                  </div>
                </TableRowColumn>
              </TableRow>
            )) : null
          }

          </TableBody>
        </Table>


      </section>
    );
  }
}

MoviesComponent.displayName = 'MoviesComponent';

// Uncomment properties you need
MoviesComponent.propTypes = {
  movies: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};
// MoviesComponent.defaultProps = {};

export default withStyles(css)(MoviesComponent);
