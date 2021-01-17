import React, { Component } from 'react';
import "./form.css";

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
          masks: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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

        postReview({ address, placeName, rating, empMasks, empDist, custMasks, custDist, maxOcc, handSan, masks });
      }
    render() {
      const { address, placeName, rating, empMasks, empDist, custMasks, custDist, maxOcc, handSan, masks} = this.state;
        return (
          <div id="submit-review">
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
                      <label for="overall3">4</label>
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
                  <td class="category">Employees Wearing Masks</td>
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
                  <td class="category">Employees Social Distancing</td>
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
                  <td class="category">Hand Sanitizer Provided</td>
                  <td>
                    <span class="star-rating">
                      <input onChange={this.onChange}id="sanitizer5" name="HandSan" type="radio" value="5" required></input>
                      <label for="sanitizer5">5</label>
                      <input onChange={this.onChange}id="sanitizer4" name="HandSan" type="radio" value="4"></input>
                      <label for="sanitizer4">4</label>
                      <input onChange={this.onChange}id="sanitizer3" name="HandSan" type="radio" value="3"></input>
                      <label for="sanitizer3">3</label>
                      <input onChange={this.onChange}id="sanitizer2" name="HandSan" type="radio" value="2"></input>
                      <label for="sanitizer2">2</label>
                      <input onChange={this.onChange}id="sanitizer1" name="HandSan" type="radio" value="1"></input>
                      <label for="sanitizer1">1</label>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="category">Customers Wearing Masks</td>
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
                  <td class="category">Customers Social Distancing</td>
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
                  <td class="category">Adherance To Maximum Occupancy</td>
                  <td>
                    <span class="star-rating">
                      <input onChange={this.onChange}id="max-occ5" ame="max-occ" type="radio" value="5" required></input>
                      <label for="max-occ5">5</label>
                      <input onChange={this.onChange}id="max-occ4" name="maxOcc" type="radio" value="4"></input>
                      <label for="max-occ4">4</label>
                      <input onChange={this.onChange}id="max-occ3" name="maxOcc" type="radio" value="3"></input>
                      <label for="max-occ3">3</label>
                      <input onChange={this.onChange}id="max-occ2" name="maxOcc" type="radio" value="2"></input>
                      <label for="max-occ2">2</label>
                      <input onChange={this.onChange}id="max-occ1" name="maxOcc" type="radio" value="1"></input>
                      <label for="max-occ1">1</label>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="category">Masks Provided?</td>
                  <td>
                    <span class="star-rating">
                      <input onChange={this.onChange}id="masks5" name="masks" type="radio" value="5" required></input>
                      <label for="masks5">5</label>
                      <input onChange={this.onChange}id="masks4" name="masks" type="radio" value="4"></input>
                      <label for="masks4">4</label>
                      <input onChange={this.onChange}id="masks3" name="masks" type="radio" value="3"></input>
                      <label for="masks3">3</label>
                      <input onChange={this.onChange}id="masks2" name="masks" type="radio" value="2"></input>
                      <label for="masks2">2</label>
                      <input onChange={this.onChange}id="masks1" name="masks" type="radio" value="1"></input>
                      <label for="masks1">1</label>
                    </span>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr colspan="2">
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