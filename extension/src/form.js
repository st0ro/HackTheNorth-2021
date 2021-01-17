import React, { Component } from 'react';
import "./form.css";
import Thanks from './thanks.js';

class Form extends Component {
    constructor() {
        super();
        this.state = {
          address: '',
          placeName: '',
          rating: '',
          empMasks: '',
          empDist: '',
          custMasks: '',
          custDist: '',
          maxOcc: '',
          handSan: '',
          masks: '',
          isSubmitted: false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.timer = this.timer.bind(this);
      }

      timer() {
        var element1 = document.querySelector(".section-hero-header-title-title");
        var element2 = document.querySelector("button[aria-label*=Address]").querySelector(".ugiz4pqJLAG__text");
        if (element1 && element2) {
          console.log("Exists!");
          this.setState({address: element2.firstElementChild.textContent});
          this.setState({placeName: element1.firstElementChild.textContent});
        }
      }

      componentDidMount() {
        var checkExist = setInterval(this.timer, 1000);
      }
      

      onChange(e){
        /*
          Because we named the inputs to match their
          corresponding values in state, it's
          super easy to update the state
        */
        console.log(this.state);
        this.setState({ [e.target.name]: e.target.value });
      }

      onSubmit(e) {
        e.preventDefault();
        // get our form data out of state
        const { address, placeName, rating, empMasks, empDist, custMasks, custDist, maxOcc, handSan, masks} = this.state;
        this.setState({isSubmitted: true})
        postReview({ address, placeName, rating, empMasks, empDist, custMasks, custDist, maxOcc, handSan, masks });
      }
    render() {
      const { address, placeName, rating, empMasks, empDist, custMasks, custDist, maxOcc, handSan, masks} = this.state;
        return (
          <div id="submit-review">
            {this.state.isSubmitted && <Thanks/>}
            <form onSubmit={this.onSubmit}>
            <table>
              <thead>
                <tr>
                  <td class="header">Category</td>
                  <td class="header">Rating</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="category1">Overall Rating</td>
                  <td>
                    <span class="star-rating">
                      <input onChange={this.onChange}id="overall5" name="rating" type="radio" value="5" required></input>
                      <label for="overall5">5</label>
                      <input onChange={this.onChange}id="overall4" name="rating" type="radio" value="4"></input>
                      <label for="overall4">4</label>
                      <input onChange={this.onChange}id="overall3" name="rating" type="radio" value="3"></input>
                      <label for="overall3">3</label>
                      <input onChange={this.onChange}id="overall2" name="rating" type="radio" value="2"></input>
                      <label for="overall2">2</label>
                      <input onChange={this.onChange}id="overall1" name="rating" type="radio" value="1"></input>
                      <label for="overall1">1</label>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="category">Are employees wearing masks?</td>
                  <td>
                    <span class="star-rating">
                      <input onChange={this.onChange}id="emp-masks5" name="empMasks" type="radio" value="5" required></input>
                      <label for="emp-masks5">5</label>
                      <input onChange={this.onChange}id="emp-masks4" name="empMasks" type="radio" value="4"></input>
                      <label for="emp-masks4">4</label>
                      <input onChange={this.onChange}id="emp-masks3" name="empMasks" type="radio" value="3"></input>
                      <label for="emp-masks3">3</label>
                      <input onChange={this.onChange}id="emp-masks2" name="empMasks" type="radio" value="2"></input>
                      <label for="emp-masks2">2</label>
                      <input onChange={this.onChange}id="emp-masks1" name="empMasks" type="radio" value="1"></input>
                      <label for="emp-masks1">1</label>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="category">How well are employees observing social distancing?</td>
                  <td>
                    <span class="star-rating">
                      <input onChange={this.onChange}id="emp-distancing5" name="empDist" type="radio" value="5" required></input>
                      <label for="emp-distancing5">5</label>
                      <input onChange={this.onChange}id="emp-distancing4" name="empDist" type="radio" value="4"></input>
                      <label for="emp-distancing4">4</label>
                      <input onChange={this.onChange}id="emp-distancing3" name="empDist" type="radio" value="3"></input>
                      <label for="emp-distancing3">3</label>
                      <input onChange={this.onChange}id="emp-distancing2" name="empDist" type="radio" value="2"></input>
                      <label for="emp-distancing2">2</label>
                      <input onChange={this.onChange}id="emp-distancing1" name="empDist" type="radio" value="1"></input>
                      <label for="emp-distancing1">1</label>
                    </span>
                  </td>
                </tr>
                <tr>
                <td class="category">Is hand sanitizer provided to customers?</td>
                  <td class="bool-q">
                    <label for="sanitizer-y">Yes</label>
                    <input onChange={this.onChange} id="sanitizer-y" name="handSan" type="radio" value="1" required></input>
                    <label for="sanitizer-n">No</label>
                    <input onChange={this.onChange} id="sanitizer-n" name="handSan" type="radio" value="0"></input>
                  </td>
                </tr>
                <tr>
                  <td class="category">Are masks provided to customers?</td>
                  <td class="bool-q">
                    <label for="masks-provided-y">Yes</label>
                    <input onChange={this.onChange} id="masks-provided-y" name="masks" type="radio" value="1" required></input>
                    <label for="masks-provided-n">No</label>
                    <input onChange={this.onChange} id="masks-provided-n" name="masks" type="radio" value="0"></input>
                  </td>
                </tr>
                <tr>
                  <td class="category">Are customers wearing masks?</td>
                  <td>
                    <span class="star-rating">
                      <input onChange={this.onChange}id="cust-masks5" name="custMasks" type="radio" value="5" required></input>
                      <label for="cust-masks5">5</label>
                      <input onChange={this.onChange}id="cust-masks4" name="custMasks" type="radio" value="4"></input>
                      <label for="cust-masks4">4</label>
                      <input onChange={this.onChange}id="cust-masks3" name="custMasks" type="radio" value="3"></input>
                      <label for="cust-masks3">3</label>
                      <input onChange={this.onChange}id="cust-masks2" name="custMasks" type="radio" value="2"></input>
                      <label for="cust-masks2">2</label>
                      <input onChange={this.onChange}id="cust-masks1" name="custMasks" type="radio" value="1"></input>
                      <label for="cust-masks1">1</label>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="category">How well are customers observing social distancing?</td>
                  <td>
                    <span class="star-rating">
                      <input onChange={this.onChange}id="cust-distancing5" name="custDist" type="radio" value="5" required></input>
                      <label for="cust-distancing5">5</label>
                      <input onChange={this.onChange}id="cust-distancing4" name="custDist" type="radio" value="4"></input>
                      <label for="cust-distancing4">4</label>
                      <input onChange={this.onChange}id="cust-distancing3" name="custDist" type="radio" value="3"></input>
                      <label for="cust-distancing3">3</label>
                      <input onChange={this.onChange}id="cust-distancing2" name="custDist" type="radio" value="2"></input>
                      <label for="cust-distancing2">2</label>
                      <input onChange={this.onChange}id="cust-distancing1" name="custDist" type="radio" value="1"></input>
                      <label for="cust-distancing1">1</label>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="category">Does this location adhere to maximum occupancy regulations?</td>
                  <td class="bool-q">
                    <label for="max-occ-y">Yes</label>
                    <input onChange={this.onChange} id="max-occ-y" name="maxOcc" type="radio" value="1" required></input>
                    <label for="max-ccc-n">No</label>
                    <input onChange={this.onChange} id="max-occ-n" name="maxOcc" type="radio" value="0"></input>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr class="submitButton" colspan="2">
                  <td>
                    <div id="submit">
                      <input onChange={this.onChange}type="submit"></input>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
            </form>
          </div>
        );
    }
}

export default Form;

function postReview(params) {
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
          console.log(request.responseText);
      }
  }
  request.open('POST', "http://108.59.82.223:34343/reviews", true);
  request.setRequestHeader('Content-type', 'multipart/form-data');
  let form = new FormData();
  form.append('address', params.address);
  form.append('placeName', params.placeName);
  form.append('rating', params.rating);
  form.append('empMasks', params.empMasks);
  form.append('empDist', params.empDist);
  form.append('custMasks', params.custMasks);
  form.append('custDist', params.custDist);
  form.append('maxOcc', params.maxOcc);
  form.append('handSan', params.handSan);
  form.append('masks', params.masks);
  request.send(form);
}