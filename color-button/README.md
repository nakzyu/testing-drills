## Assertions

consists of expect and matcher

```js
expect(linkElment).toBeInTheDocument();
```

### expect

- Jest global, starts the assertion

### matcher

- type of assertion
- this matcher comes from Jest-DOM

### More assertion examples

```js
expect(element.textContent).toBe("hello");
expect(elementsArray).toHaveLength(7);
```

### jest-dom

- comes with CRA
- src/setupTests.js imports it before each test, makes matchers availble
- DOM-based matchers
  - examples: toBeVisible() or toBeChecked()

## Jest

- React Testing Library helps with
  - rendering components into virtual DOM
  - searching virtual DOM
  - interactiong with virtual DOM

* Needs a test runner

  - Find tests, run them, make assertions

* Jest

  - is recommended by Testing Library
  - comes with CRA

* <code>npm test</code> runs an npm script that runs Jest in watch mode

## How des Jest Work?

- global <code>test</code> method has two arguments:

  - string description
  - test function

- Test fails if error is thrown when running function
  - assertions throw erros when expectation fails

* No error -> test pass
  - empty test should pass!

## TDD (Test-Driven Development)

- Write tests before writing code

  - then write code according to "spec" set by tests

- "red-green" testing
  - Test fails before code is written

## Why TDD?

- Makes a juge difference in how it feels to write tests

  - part of the coding process, not a "chore" to do at the end

- More efficient
  - Re-run tests "for free" after changes

## React Testing Library Philosophy

### What does React Testing Library Do?

- Creates virtual DOM for testing
  - and utilities for interacting with DOM
- Allows testing without a browser

### Types of Tests

- Unit tests

  - Tests one unit of code in isolation

- Integration tests

  - How multiple units work together

- Functional Tests

  - Tests a particular function of software
  - Tests the behavior, not the code

* Acceptance / E2E Tests
  - Use actual browser and server (Cypress, Selenium )

## Functional Testing

diffrent mindset from unit testing

| Unit Testing                                  | Functional Testing                        |
| --------------------------------------------- | ----------------------------------------- |
| isolated: mock dependencies, test internals   | incoude all relevant units, test behavior |
| Very easy to pinpoint failures                | Close to how users interact with software |
|                                               | Robuts tests                              |
| Further from how users interact with software |                                           |
| More likely to break with refactoring         | More difficult to debug failing tests     |

## TDD vs BDD

- Testing Library encourages testing behavior over implementation

* So shouldn't we be calling this BDD instead of TDD?

  - actually, no

* BDD is very explicitly defined
  - involves collaboration between lots of roles
    - developers, QA, business partners, etc
  - defines process for different groups to interact
* In this course, only developers, so TDD!

## Accessibility and Finding Elements

- Testing Library recommends finding elements by accessibility handles
  - https://testing-library.com/docs/guide-which-query

* CRA's example test uses <code>getByText</code>

  - OK for non-interactive elements
  - better: <code>getByRole</code>

* Roles documentation: https://www.w3.org/TR/wai-aria/#role_definitions
  - some elements have built-in roles: <code>button, a</code>
* Can't find an element like a screen reader would?
  - Then your app isn't friendly to screen readers
