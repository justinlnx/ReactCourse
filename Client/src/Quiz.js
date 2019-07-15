/**
 * `QUIZ`
 */

/**
 * Question 1: 
 * If there were a `<Clock />` component in an app that you are building,
 * how would you pass a `currentTime` `prop` into it?
 * 
 *  A. `<Clock {new Date().getTime()} />`
 *  B. `<Clock this.props={new Date().getTime()} />`
 *  C. `<Clock currentTime={new Date().getTime} />`
 *  D. `<Clocl this.currentTime={new Date().getTime()} />`
 */

/**
 * Question 2:
 * Using the `<Clock />` component example:
 * `<Clock currentTime="3:41PM" />`
 * How would you access the value `3:41PM` from inside the component
 * 
 *  A. `Clock.currentTime`
 *  B. `currentTime`
 *  C. `this.currentTime`
 *  D. `this.props.currentTime`
 */

/**
 * Question 3:
 * How do you pass multiple props individually to a component?
 * 
 *  A. `<Clock time={Date.now()} zone='PDT' />`
 *  B. `<Clock props={{time: Date.now(), zone: 'PDT'}} />`
 *  C. `<Clock [time=Date.now(), zone='PDT'] />`
 *  D. `<Clock props={[Date.now(), 'PDT']} />`
 */

/**
 * Question 4:
 * When is it appropriate to use a Stateless Functional Component?
 * _Select all that apply._
 * 
 *  1. when the component needs to initialize some data
 *  2. when all the component needs is a `render` method
 *  3. when the component doesn't have any props passed in
 *  4. when the component does not use JSX
 */