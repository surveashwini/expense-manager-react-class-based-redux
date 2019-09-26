import React from 'react';
import './Edit.css';
import Add from '../Add/Add';


class Edit extends React.Component {

  render() {
    return (
      <section className="edit-overlay"> 
        <Add editItem={this.props.match.params}></Add>
      </section>
    )
  }

}
export default Edit;
