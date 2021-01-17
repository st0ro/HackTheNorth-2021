import React, { Component } from 'react';
import Form from './form.js';
import Thanks from './thanks.js';

class UserReview extends Component {
    constructor() {
        super();
        this.state = {
          showHideForm: false,
          showHideThanks: false,
        };
        this.hideComponent = this.hideComponent.bind(this);
    }

    hideComponent(name) {
        console.log(name);
        switch (name) {
          case "showHideForm":
            this.setState({ showHideForm: !this.state.showHideForm });
            break;
          case "showHideThanks":
            this.setState({ showHideThanks: !this.state.showHideThanks });
            break;
          default:
            null;
        }
      }
    
      render() {
        const { showHideForm, showHideThanks } = this.state;
        return (
          <div>
            {showHideForm && <Form />}
            <hr />
            {showHideThanks && <Thanks />}
            <hr />
            <div>
              <button onClick={() => this.hideComponent("showHideForm")}>
                Submit
              </button>
            </div>
          </div>
        );
        }
}
export default UserReview;