import React from 'react';
import './Edit.scss';
import Add from '../Add/Add';


class Edit extends React.Component {

  render() {
    return (
      <section className=""> 
        <Add editItem={this.props.match.params}></Add>
      </section>
    )
  }

}
export default Edit;
