'use strict';

angular.module('directivesQuizApp')
  .controller('legoStore', function() {
    this.name = 'Udaci-Block Superstore';
    this.brickColors = ['Black', 'Red', 'Rust', 'Salmon', 'Dark Tan', 'Earth Orange', 'Orange', 'Yellow', 'Lime', 'Green', 'Aqua', 'Blue', 'Dark Azure', 'Violet', 'Magenta', 'Bright Pink'];
    this.bricks = {
      Red: {
        '1x1': {
          quantity: 13,
          price: 0.01
        },
        '2x2': {
          quantity: 48,
          price: 0.03
        },
        '2x6': {
          quantity: 9,
          price: 0.05
        },
        '36x12': {
          quantity: 24,
          price: 2.99
        }
      },
      Blue: {
        '2x2': {
          quantity: 3,
          price: 0.02
        },
        '2x4': {
          quantity: 19,
          price: 0.04
        }
      },
      Green: {
        '1x8': {
          quantity: 139,
          price: 0.08
        },
        '2x4': {
          quantity: 30,
          price: 0.04
        },
        '2x8': {
          quantity: 11,
          price: 0.08
        }
      }
    };
  });
