import {PLATFORM} from 'aurelia-pal';

export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia Babel SystemJS';
    config.map([
      {"route": ["", "welcome"], "name": "welcome", "moduleId": PLATFORM.moduleName("./welcome"), "nav": true, "title": "Welcome"},
      {"route": "users", "name": "users", "moduleId": PLATFORM.moduleName("./users"), "nav": true, "title": "GitHub Users"},
      {"route": "child-router", "name": "child-router", "moduleId": PLATFORM.moduleName("./child-router"), "nav": true, "title": "Child Router"},
      {"route": "generator-view", "name": "generator-view", "moduleId": PLATFORM.moduleName("./views/generator-view"), "nav": true, "title": "Generators"},
      {"route": "hangman", "name": "hangman", "moduleId": PLATFORM.moduleName("./views/hangman"), "nav": true, "title": "Hangman"},
      {"route": "choose-the-door", "name": "choose-the-door", "moduleId": PLATFORM.moduleName("./views/choose-the-door"), "nav": true, "title": "Choose The Door"},
      {"route": "blackjack", "name": "blackjack", "moduleId": PLATFORM.moduleName("./views/blackjack/blackjack"), "nav": true, "title": "BlackJack"},
      {"route": "asteroids", "name": "asteroids", "moduleId": PLATFORM.moduleName("./views/asteroids/asteroids"), "nav": true, "title": "Asteroids"}
    ]);

    this.router = router;
  }
}
