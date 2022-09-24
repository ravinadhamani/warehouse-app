import React from "react";
import styles from "./inputstyles.module.css";

class Inputtag extends React.Component {
  constructor(props) {
    super(props);
    console.log("inputtag - constructor");
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    //alert(e.target.value);
    console.log("inputtag - handleChange");
    this.props.onQueryChange(e.target.value);
  }

  render() {
    console.log("inputtag - render");
    return (
      <div>
        <center>
          <input
            id={styles.input}
            type="text"
            placeholder="Search For Movie Title....."
            onChange={this.handleChange}
          />
        </center>
      </div>
    );
  }
}

export default Inputtag;
