import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

/** Lesson 1: Pass Data With Props */
// class ListContacts extends Component {
//   render() {
//     /**
//      * part 1: pass props in
//      * props 是一个 `read-only` 的data，无法改变，是这个component的
//      * parent 提供的
//      */
//     // console.log('props', this.props);
//     // return (
//     //   <ol className="contact-list"></ol>
//     // );
//     /**
//      * Part 1 Quiz: 
//      * If there were a `<Clock />` component in an app that you are building,
//      * how would you pass a `currentTime` `prop` into it?
//      * 
//      *  A. `<Clock {new Date().getTime()} />`
//      *  B. `<Clock this.props={new Date().getTime()} />`
//      *  C. `<Clock currentTime={new Date().getTime} />`
//      *  D. `<Clocl this.currentTime={new Date().getTime()} />`
//      */

//      /**
//       * Part 2: iterate over the contacts props
//       */
//     //  return (
//     //   <ol className="contact-list">
//     //     {this.props.contacts.map((contact) => (
//     //       /**
//     //        * the reason why we need this `key` prop on a `.map` list:
//     //        * because eventually, one of these list item may change,
//     //        * by having an unique key attribute on each item, react is
//     //        * able to know which item is the list has changed rather than
//     //        * recreating that list every time
//     //        */
//     //       <li key={contact.id}>
//     //         {contact.name}
//     //       </li>
//     //     ))}
//     //   </ol>
//     //  );
//      /**
//       * Part 2 Quiz:
//       * Using the `<Clock />` component example:
//       * `<Clock currentTime="3:41PM" />`
//       * How would you access the value `3:41PM` from inside the component
//       * 
//       *  A. `Clock.currentTime`
//       *  B. `currentTime`
//       *  C. `this.currentTime`
//       *  D. `this.props.currentTime`
//       */

//     /**
//      * Part 3: building contact
//      */
//     return (
//       <ol className="contact-list">
//         {this.props.contacts.map((contact) => (
//           /**
//            * the reason why we need this `key` prop on a `.map` list:
//            * because eventually, one of these list item may change,
//            * by having an unique key attribute on each item, react is
//            * able to know which item is the list has changed rather than
//            * recreating that list every time
//            */
//           <li key={contact.id} className='contact-list-item'>
//             <div className='contact-avatar' style={{
//               backgroundImage: `url(${contact.avatarURL})`
//             }} />
//             <div className='contact-details'>
//               <p>{contact.name}</p>
//               <p>{contact.email}</p>
//             </div>
//             <button className='contact-remove'>Remove</button>
//           </li>
//         ))}
//       </ol>
//      );
//      /**
//       * Part 3 Quiz:
//       * How do you pass multiple props individually to a component?
//       * 
//       *  A. `<Clock time={Date.now()} zone='PDT' />`
//       *  B. `<Clock props={{time: Date.now(), zone: 'PDT'}} />`
//       *  C. `<Clock [time=Date.now(), zone='PDT'] />`
//       *  D. `<Clock props={[Date.now(), 'PDT']} />`
//       */
//   }
// }

/**
 * Lesson 2: Functional Components
 * 之前用到的都是Class Component 但是react还有一种component叫做stateless functional component
 * 
 * 只需要有一个function 就可以render一个component
 *  * takes in props as argument and returns some UI
 *  * no `this` keyword
 * 什么时候可以用：
 * 如果你的class component 只有一个 `render` method 的话，你就可以把他refactor成一个
 * functional component
 */
// function ListContacts (props) {
//   return (
//     <ol className="contact-list">
//       {props.contacts.map((contact) => (
//         /**
//          * the reason why we need this `key` prop on a `.map` list:
//          * because eventually, one of these list item may change,
//          * by having an unique key attribute on each item, react is
//          * able to know which item is the list has changed rather than
//          * recreating that list every time
//          */
//         <li key={contact.id} className='contact-list-item'>
//           <div className='contact-avatar' style={{
//             backgroundImage: `url(${contact.avatarURL})`
//           }} />
//           <div className='contact-details'>
//             <p>{contact.name}</p>
//             <p>{contact.email}</p>
//           </div>
//           <button className='contact-remove'>Remove</button>
//         </li>
//       ))}
//     </ol>
//   );
// }

/**
 * Lesson 3: Add State to Component
 * 之前讲到说props是read only，那么state，相反，说的是可以改变的mutable data
 * 
 * props是parent 提供的 不能改变
 * state是local 的 可以改变 这些改变通常可能是一些user input，比如说click a button
 * 
 * 那state management 也是对于react来说 是独一无二的一个feature
 * 也是让许多前端程序员们 热衷于react的原因之一 因为他非常好用非常实用
 */




/** Original content */
// class ListContacts extends Component {
//   static propTypes = {
//     contacts: PropTypes.array.isRequired,
//     onDeleteContact: PropTypes.func.isRequired
//   }

//   state = {
//     query: ''
//   }

//   updateQuery = (query) => {
//     this.setState({ query: query.trim() })
//   }

//   clearQuery = () => {
//     this.setState({ query: '' })
//   }

//   render() {
//     const { contacts, onDeleteContact } = this.props
//     const { query } = this.state

//     let showingContacts
//     if (query) {
//       const match = new RegExp(escapeRegExp(query), 'i')
//       showingContacts = contacts.filter((contact) => match.test(contact.name))
//     } else {
//       showingContacts = contacts
//     }

//     showingContacts.sort(sortBy('name'))

//     return (
//       <div className='list-contacts'>
//         <div className='list-contacts-top'>
//           <input
//             className='search-contacts'
//             type='text'
//             placeholder='Search contacts'
//             value={query}
//             onChange={(event) => this.updateQuery(event.target.value)}
//           />
//           <Link
//             to='/create'
//             className='add-contact'
//           >Add Contact</Link>
//         </div>

//         {showingContacts.length !== contacts.length && (
//           <div className='showing-contacts'>
//             <span>Now showing {showingContacts.length} of {contacts.length} total</span>
//             <button onClick={this.clearQuery}>Show all</button>
//           </div>
//         )}

//         <ol className='contact-list'>
//           {showingContacts.map((contact) => (
//             <li key={contact.id} className='contact-list-item'>
//               <div className='contact-avatar' style={{
//                 backgroundImage: `url(${contact.avatarURL})`
//               }}/>
//               <div className='contact-details'>
//                 <p>{contact.name}</p>
//                 <p>{contact.email}</p>
//               </div>
//               <button onClick={() => onDeleteContact(contact)} className='contact-remove'>
//                 Remove
//               </button>
//             </li>
//           ))}
//         </ol>
//       </div>
//     )
//   }
// }

export default ListContacts
