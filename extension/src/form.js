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
                      <label for="overall3">4</label>
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
                  <td class="category">Employees Wearing Masks</td>
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
                  <td class="category">Employees Social Distancing</td>
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
                  <td class="category">Hand Sanitizer Provided</td>
                  <td>
                    <span class="star-rating">
                      <input id="sanitizer5" name="sanitizer" type="radio" value="5" required></input>
                      <label for="sanitizer5">5</label>
                      <input id="sanitizer4" name="sanitizer" type="radio" value="4"></input>
                      <label for="sanitizer4">4</label>
                      <input id="sanitizer3" name="sanitizer" type="radio" value="3"></input>
                      <label for="sanitizer3">3</label>
                      <input id="sanitizer2" name="sanitizer" type="radio" value="2"></input>
                      <label for="sanitizer2">2</label>
                      <input id="sanitizer1" name="sanitizer" type="radio" value="1"></input>
                      <label for="sanitizer1">1</label>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="category">Customers Provided Masks</td>
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
                  <td class="category">Customers Social Distancing</td>
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
                  <td class="category">Adherance To Maximum Occupancy</td>
                  <td>
                    <span class="star-rating">
                      <input id="max-occ5" ame="max-occ" type="radio" value="5" required></input>
                      <label for="max-occ5">5</label>
                      <input id="max-occ4" name="max-occ" type="radio" value="4"></input>
                      <label for="max-occ4">4</label>
                      <input id="max-occ3" name="max-occ" type="radio" value="3"></input>
                      <label for="max-occ3">3</label>
                      <input id="max-occ2" name="max-occ" type="radio" value="2"></input>
                      <label for="max-occ2">2</label>
                      <input id="max-occ1" name="max-occ" type="radio" value="1"></input>
                      <label for="max-occ1">1</label>
                    </span>
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