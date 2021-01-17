/*global chrome*/
/* src/embed.js */
import React, { Component } from 'react';
import { render } from 'react-dom';
import Dock from 'react-dock';
import icon from './images/mask.png';

class InjectApp extends Component {

  render() {
    return (
      <div>
        <button>
          <div class="ugiz4pqJLAG__content">
            <div class="ugiz4pqJLAG__icon-container"><img class="ugiz4pqJLAG__icon" src={icon} /></div>
            <div class="ugiz4pqJLAG__text">COVID-19 Safety Customer Reviews > </div>
          </div>
        </button>
      </div>
    );
  }
}

var oldHref = document.location.href;
oldHref = oldHref.substring(0, oldHref.indexOf('@'));
console.log(oldHref);
window.onload = function() {
    var bodyList = document.querySelector("body")
        ,observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (oldHref != document.location.href.substring(0, document.location.href.indexOf('@'))) {
                    oldHref = document.location.href.substring(0, document.location.href.indexOf('@'));
                    const injectDOM = document.createElement('div');
                    injectDOM.className = 'inject-react';
                    injectDOM.style.textAlign = 'left';
                    injectDOM.style.padding = '0px 0 10px 0';
                    injectDOM.style.fontSize = '14px';
                    injectDOM.style.color = "#2B2D2F";
                    var parent_div;
                    parent_div = document.querySelector(".section-hero-header-title");
                    if (parent_div) {
                      parent_div.appendChild(injectDOM);
                    }
                    else {
                      document.body.appendChild(injectDOM);
                    }
                    render(<InjectApp />, injectDOM);
                }
            });
        });

    var config = {
        childList: true,
        subtree: true
    };
    observer.observe(bodyList, config);
};