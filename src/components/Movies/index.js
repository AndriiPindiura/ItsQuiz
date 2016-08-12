'use strict';

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import css from './main.scss';
import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn }
  from 'material-ui/Table';


// require('styles//Movies.css');

class MoviesComponent extends React.Component {
  componentDidMount() {
    fetch('/movies/list')
      .then((response) => {
        if (response.status === 200) {
          response.json().then(movies => {
            this.props.actions.setMoviesToStore(movies);
          });
        }
      })
      .catch(error => { console.log(error); });
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
              <input placeholder="Ищите фильм по названию или актеру" />
            </header>}
          iconElementRight={
            <FloatingActionButton secondary style={addMovieStyle}>
              <ContentAdd />
            </FloatingActionButton>
          }
          showMenuIconButton={false}
        />

        <Table
          wrapperStyle={wrapStyle}
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
          {this.props.movies ? this.props.movies.map((row, index) => (
            <TableRow key={index} selected={row.selected}>
              <TableRowColumn style={{ width: '10%' }}><span>#{row._id}</span></TableRowColumn>
              <TableRowColumn>
                <h3>{row.title}</h3>
                <span>{row.releaseYear} {row.videoType}</span>
              </TableRowColumn>
              <TableRowColumn style={{ whiteSpace: 'pre-wrap' }}>
                <div>
                  {row.actors ? row.actors
                    .map(actor => `${actor.firstName} ${actor.lastName}`)
                    .join(', ') : null}
                  <button onClick={this.props.actions.removeMovie.bind(this, row._id)}>
                    <svg width="12px" height="12px" viewBox="0 0 12 12">
                      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="MyMovies" transform="translate(-960.000000, -131.000000)">
                          <g id="Moview" transform="translate(35.000000, 118.000000)">
                            <g id="ic_remove" transform="translate(922.000000, 10.000000)">
                              <path d="M0,0 L18,0 L18,18 L0,18 L0,0 Z M0,0 L18,0 L18,18 L0,18 L0,0 Z" id="Shape"></path>
                              <polygon id="Shape" fill="#9B9B9B" points="14.53 4.53 13.47 3.47 9 7.94 4.53 3.47 3.47 4.53 7.94 9 3.47 13.47 4.53 14.53 9 10.06 13.47 14.53 14.53 13.47 10.06 9"></polygon>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </button>
                </div>
              </TableRowColumn>
            </TableRow>
            )) : null}

          </TableBody>
        </Table>
        <button onClick={this.props.actions.getMovies} />
      </section>
    );
  }
}

MoviesComponent.displayName = 'MoviesComponent';

// Uncomment properties you need
MoviesComponent.propTypes = {
  caption: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};
// MoviesComponent.defaultProps = {};

export default withStyles(css)(MoviesComponent);
