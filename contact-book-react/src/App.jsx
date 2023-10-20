// import { Component } from 'react';
// import {nanoid} from 'nanoid'
// import { MyHeader } from './components/Header/Header';
// import { MyFormName } from './components/Form/FormName';
// import { MyFormNumber } from './components/Form/FormNumber'
// // import { MyContactList } from './components/ContactList/ContactList';
// import { BulletPoints } from './components/ContactList/ContactList.styled';
// import './App.css';

// export class App extends Component {
//   state = {
//     contacts: [],
//     name: '',
//     phone: '',
//   }
  
//   handleOnSubmittName = (event) => {
//     event.preventDefault()
//   const newName = this.state.name;
//   const newPhone = this.state.phone 
//   const newContact = {
//     name: newName,
//     phone: newPhone,
//   }
//   this.setState(prevState => ({
//     contacts: [...prevState.contacts, newContact],
//     name: '',
//     phone: '',
//   }))
//   }

//   handleOnSubmittNumber = (event) => {
//     event.preventDefault()
//     const newNumber = document.getElementById('numberInput').value;
   
  
    
//     this.setState(prevState => ({
//       phone: newNumber,
//       contactsNumbers: [...prevState.contactsNumbers, newNumber]
//     }))
    
//   }
  
//   render(){
//     const myNewName = this.state.contactsNames.map(contactName => (
//       <BulletPoints key={nanoid()}>{contactName} <button>Delete contact</button></BulletPoints>
      
//     ));
//     const myNewNumber = this.state.contactsNumbers.map(contactNumber => (
//       <p key={nanoid()}>{contactNumber}</p>
//     ));
//     return(
     
//     <>
//       <MyHeader/>
      
//       <MyFormName bySubmit = {this.handleOnSubmittName}/>
//       <MyFormNumber bySubmit = {this.handleOnSubmittNumber}/>
      
//       <ul>
//         {myNewName && myNewNumber}
//       </ul>
//       {/* <ul>
//         {myNewNumber}
//       </ul> */}
//     </>
//     )
//   }
// }



// import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
// import { MyHeader } from './components/Header/Header';
// import { MyFormName } from './components/Form/FormName';
// import { MyFormNumber } from './components/Form/FormNumber';
// // import { BulletPoints } from './components/ContactList/ContactList.styled';
// import './App.css';

// export class App extends Component {
//   state = {
//     contacts: [], // Combine names and numbers in a single array of objects
//     name: '',
//     phone: '',
//   };

//   handleOnSubmitName = (event) => {
//     event.preventDefault();
//     const newName = document.getElementById('nameInput');

//     if (newName) {
//       // Create a new contact object and add it to the contacts array
//       const newContact = {
//         name: newName,
//         phone: this.state.phone,
//         id: nanoid(),
//       };

//       this.setState((prevState) => ({
//         contacts: [...prevState.contacts, newContact],
//         name: '', // Clear the input fields after submission
//         phone: '',
//       }));
//     }
//   };

//   handleOnSubmitNumber = (event) => {
//     event.preventDefault();
//     const newNumber = document.getElementById('numberInput');

//     if (newNumber) {
//       this.setState({ phone: '' }); // Clear the input field after submission
//     }
//   };

//   render() {
//     const contactList = this.state.contacts.map((contact) => (
//       <li key={contact.id}>
//         {contact.name} {contact.phone} <button>Delete contact</button>
//       </li>
//     ));

//     return (
//       <>
//         <MyHeader />
//         <MyFormName
//           bySubmit={this.handleOnSubmitName}
//           name={this.state.name}
//           phone={this.state.phone}
//           onNameChange={(e) => this.setState({ name: e.target.value })}
//           onPhoneChange={(e) => this.setState({ phone: e.target.value })}
//          />
//         <MyFormNumber
//           bySubmit={this.handleOnSubmitNumber}
//           phone={this.state.phone}
//           onPhoneChange={(e) => this.setState({ phone: e.target.value })}
//          />
//         <ul>{contactList}</ul>
//       </>
//     );
//   }
// }



import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { MyHeader } from './components/Header/Header';
import { MyFormName } from './components/Form/FormName';
import { MyFormNumber } from './components/Form/FormNumber';
import './App.css';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    phone: '',
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    const newName = document.getElementById('nameInput');
    const newNumber = document.getElementById('numberInput');

    if (newName && newNumber) {
      const newContact = {
        name: newName.value,
        phone: newNumber.value,
        id: nanoid(),
      };

      this.setState((prevState) => ({
        contacts: [...prevState.contacts, newContact],
        name: '',
        phone: '',
      }));
    }
  };

  handleOnDelete = (event) => {
  console.log('Deleted element');
   this.setState(({
     contacts: [],
     name: '',
     phone: '',
   }))
  }

  render() {
    const contactList = this.state.contacts.map((contact) => (
      <li key={contact.id}>
        {contact.name} - {contact.phone} <button onClick={this.handleOnDelete}>Delete contact</button>
      </li>
    ));

    return (
      <>
        <MyHeader />
        <form>
          <MyFormName
            name={this.state.name}
            onNameChange={(e) => this.setState({ name: e.target.value })}
          />
          <MyFormNumber
            phone={this.state.phone}
            onPhoneChange={(e) => this.setState({ phone: e.target.value })}
          />
          <button type="submit" onClick={this.handleOnSubmit}>Add Contact</button>
        </form>
        <ul>{contactList}</ul>
      </>
    );
  }
}


