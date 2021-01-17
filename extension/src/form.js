import React, { Component } from 'react';
import "./form.css";

class Form extends Component {
    render() {
        return (
          <div id="submit-review">
            <form method="POST">
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
                      <input id="overall5" name="overall" type="radio" value="5" required></input>
                      <label for="overall5">5</label>
                      <input id="overall4" name="overall" type="radio" value="4"></input>
                      <label for="overall4">4</label>
                      <input id="overall3" name="overall" type="radio" value="3"></input>
                      <label for="overall3">3</label>
                      <input id="overall2" name="overall" type="radio" value="2"></input>
                      <label for="overall2">2</label>
                      <input id="overall1" name="overall" type="radio" value="1"></input>
                      <label for="overall1">1</label>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="category">Are employees wearing masks?</td>
                  <td>
                    <span class="star-rating">
                      <input id="emp-masks5" name="emp-masks" type="radio" value="5" required></input>
                      <label for="emp-masks5">5</label>
                      <input id="emp-masks4" name="emp-masks" type="radio" value="4"></input>
                      <label for="emp-masks4">4</label>
                      <input id="emp-masks3" name="emp-masks" type="radio" value="3"></input>
                      <label for="emp-masks3">3</label>
                      <input id="emp-masks2" name="emp-masks" type="radio" value="2"></input>
                      <label for="emp-masks2">2</label>
                      <input id="emp-masks1" name="emp-masks" type="radio" value="1"></input>
                      <label for="emp-masks1">1</label>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="category">How well are employees observing social distancing?</td>
                  <td>
                    <span class="star-rating">
                      <input id="emp-distancing5" name="emp-distancing" type="radio" value="5" required></input>
                      <label for="emp-distancing5">5</label>
                      <input id="emp-distancing4" name="emp-distancing" type="radio" value="4"></input>
                      <label for="emp-distancing4">4</label>
                      <input id="emp-distancing3" name="emp-distancing" type="radio" value="3"></input>
                      <label for="emp-distancing3">3</label>
                      <input id="emp-distancing2" name="emp-distancing" type="radio" value="2"></input>
                      <label for="emp-distancing2">2</label>
                      <input id="emp-distancing1" name="emp-distancing" type="radio" value="1"></input>
                      <label for="emp-distancing1">1</label>
                    </span>
                  </td>
                </tr>
                <tr>
                <td class="category">Is hand sanitizer provided to customers?</td>
                  <td class="bool-q">
                    <label for="sanitizer-y">Yes</label>
                    <input id="sanitizer-y" name="sanitizer" type="radio" value="1" required></input>
                    <label for="sanitizer-n">No</label>
                    <input id="sanitizer-n" name="sanitizer" type="radio" value="0"></input>
                  </td>
                </tr>
                <tr>
                  <td class="category">Are masks provided to customers?</td>
                  <td class="bool-q">
                    <label for="masks-provided-y">Yes</label>
                    <input id="masks-provided-y" name="masks-provided" type="radio" value="1" required></input>
                    <label for="masks-provided-n">No</label>
                    <input id="masks-provided-n" name="masks-provided" type="radio" value="0"></input>
                  </td>
                </tr>
                <tr>
                  <td class="category">Are customers wearing masks?</td>
                  <td>
                    <span class="star-rating">
                      <input id="cust-masks5" name="cust-masks" type="radio" value="5" required></input>
                      <label for="cust-masks5">5</label>
                      <input id="cust-masks4" name="cust-masks" type="radio" value="4"></input>
                      <label for="cust-masks4">4</label>
                      <input id="cust-masks3" name="cust-masks" type="radio" value="3"></input>
                      <label for="cust-masks3">3</label>
                      <input id="cust-masks2" name="cust-masks" type="radio" value="2"></input>
                      <label for="cust-masks2">2</label>
                      <input id="cust-masks1" name="cust-masks" type="radio" value="1"></input>
                      <label for="cust-masks1">1</label>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="category">How well are customers observing social distancing?</td>
                  <td>
                    <span class="star-rating">
                      <input id="cust-distancing5" name="cust-distancing" type="radio" value="5" required></input>
                      <label for="cust-distancing5">5</label>
                      <input id="cust-distancing4" name="cust-distancing" type="radio" value="4"></input>
                      <label for="cust-distancing4">4</label>
                      <input id="cust-distancing3" name="cust-distancing" type="radio" value="3"></input>
                      <label for="cust-distancing3">3</label>
                      <input id="cust-distancing2" name="cust-distancing" type="radio" value="2"></input>
                      <label for="cust-distancing2">2</label>
                      <input id="cust-distancing1" name="cust-distancing" type="radio" value="1"></input>
                      <label for="cust-distancing1">1</label>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="category">Does this location adhere to maximum occupancy regulations?</td>
                  <td class="bool-q">
                    <label for="max-occ-y">Yes</label>
                    <input id="max-occ-y" name="max-occ" type="radio" value="1" required></input>
                    <label for="max-ccc-n">No</label>
                    <input id="max-occ-n" name="max-ccc" type="radio" value="0"></input>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr colspan="2">
                  <td>
                    <div id="submit">
                      <input type="submit"></input>
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