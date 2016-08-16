import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class ConfirmDeleteComponent extends React.Component {
  render() {
    const actions = [
      <FlatButton
        label="Отмена"
        onTouchTap={this.props.actions.confirmRemove}
      />,
      <FlatButton
        label="Удалить"
        primary
        onTouchTap={() => this.props.actions.removeMovie(this.props.id)}
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
