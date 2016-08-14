import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class ConfirmDeleteComponent extends React.Component {
  constructor(props) {
    super(props);
    this.removeMovie = this.removeMovie.bind(this);
  }
  // componentWillUpdate() {
  //   this.removeMovie = this.props.actions.removeMovie.bind(this, this.props.id);
  // }
  removeMovie() {
    this.props.actions.removeMovie(this.props.id);
  }
  render() {
    const actions = [
      <FlatButton
        label="Отмена"
        onTouchTap={this.props.actions.confirmRemove}
      />,
      <FlatButton
        label="Удалить"
        primary
        onTouchTap={this.removeMovie}
      />,
    ];
    return (
      <Dialog
        title="ВНИМАНИЕ!"
        actions={actions}
        modal={false}
        open={this.props.confirm}
      >
        Вы уверены что хотите удалить фильм?
      </Dialog>
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

export default ConfirmDeleteComponent;
