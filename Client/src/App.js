import React, { Component } from 'react';
import ListContacts from './ListContacts'

/** Lesson 1: Pass Data With Props */
const contacts = [
  {
    "id": "jeremy",
    "name": "Jeremy Lin",
    "email": "jeremy@nba.com",
    "avatarURL": "http://localhost:5001/jeremy.jpeg"
  },
  {
    "id": "raptors",
    "name": "Toronto Raptors",
    "email": "torontoRaptors@nba.com",
    "avatarURL": "http://localhost:5001/raptors.png"
  },
  {
    "id": "lgd",
    "name": "LGD Gaming",
    "email": "lgd@dota.com",
    "avatarURL": "http://localhost:5001/lgd.png"
  }
];

class App extends Component {
  /**
   * orignal content
   */
  // state = {
  //   contacts: []
  // }
  // componentDidMount() {
  //   ContactsAPI.getAll().then((contacts) => {
  //     this.setState({ contacts })
  //   })
  // }
  // removeContact = (contact) => {
  //   this.setState((state) => ({
  //     contacts: state.contacts.filter((c) => c.id !== contact.id)
  //   }))

  //   ContactsAPI.remove(contact)
  // }

  // createContact(contact) {
  //   ContactsAPI.create(contact).then(contact => {
  //     this.setState(state => ({
  //       contacts: state.contacts.concat([ contact ])
  //     }))
  //   })
  // }

  // render() {
  //   return (
  //     <div>
  //       {/* Completed component! */}
  //       <Route exact path='/' render={() => (
  //         <ListContacts
  //           onDeleteContact={this.removeContact}
  //           contacts={this.state.contacts}
  //         />
  //       )}/>
  //       <Route path='/create' render={({ history }) => (
  //         <CreateContact
  //           onCreateContact={(contact) => {
  //             this.createContact(contact)
  //             history.push('/')
  //           }}
  //         />
  //       )}/>
  //     </div>
  //   )
  // }



  /**
   * Lesson 1: Pass Data With Props
   */
  render() {
    return (
      <div>
        {/* Lesson 1: Pass Data With Props */}
        {/* Hellow World */}
        <ListContacts contacts={contacts} />
      </div>
    )
  }
}

export default App;
