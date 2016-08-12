'use strict';

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import css from './main.scss';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

// require('styles//Movies.css');

class ConfirmDeleteComponent extends React.Component {
  render() {
    const actions = [
      <FlatButton
        label="Отмена"
        primary
        keyboardFocused
        onTouchTap={this.props.actions.confirmRemove}
      />,
      <FlatButton
        label="Удалить"
        primary
        onTouchTap={this.props.actions.removeMovie.bind(this, this.props.id)}
      />,
    ];
    return (
      <div>
        <Dialog
          title="ВНИМАНИЕ!"
          actions={actions}
          modal={false}
          open={this.props.confirm}
          // onRequestClose={this.handleClose}
        >
          Вы уверены что хотите удалить фильм?
        </Dialog>
      </div>
    );
  }
}

ConfirmDeleteComponent.displayName = 'ConfirmDeleteComponent';

// Uncomment properties you need
ConfirmDeleteComponent.propTypes = {
  confirm: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  // movies: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};
// ConfirmDeleteComponent.defaultProps = {};

export default withStyles(css)(ConfirmDeleteComponent);
