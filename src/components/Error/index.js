import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class ErrorComponent extends React.Component {
  render() {
    const customContentStyle = {
      width: '100%',
      maxWidth: 'none',
    };

    const actions = [
      <FlatButton
        label="Закрыть"
        onTouchTap={() => this.props.actions.setError({})}
      />,
    ];
    return (
      <Dialog
        title="Ошибка"
        actions={actions}
        modal={false}
        contentStyle={customContentStyle}
        open={this.props.error.message ? true : false}
      >
        <p>{this.props.error ? this.props.error.message : false}</p>
      </Dialog>
    );
  }
}

ErrorComponent.displayName = 'ErrorComponent';

// Uncomment properties you need
ErrorComponent.propTypes = {
  error: PropTypes.object.isRequired,
  // movies: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};
// ConfirmDeleteComponent.defaultProps = {};

export default ErrorComponent;
