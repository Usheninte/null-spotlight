import React, { Component } from 'react';

import One from './git/one';
import Two from './git/two';
import Three from './git/three';
import Four from './git/four';
import Five from './git/five';
import Six from './git/six';
import Seven from './git/seven';

import About from './about';
import Open from './open';

export default class Block extends Component {
  render() {
    return(
      <div>
        <One />
        <Two />
        <Three />
        <hr />
        <About />
        <hr />
        <Four />
        <Five />
        <Six />
        <Seven />
        <hr />
        <Open />
      </div>
    );
  }
}
