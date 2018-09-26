import { start } from './framework/game';

import Ship from './ship';
import Comet from './comet';

export class Asteroids {

  constructor() {

  }

  attached() {
    new Ship();

    new Comet();
    new Comet();
    new Comet();

    start();
  }
}
