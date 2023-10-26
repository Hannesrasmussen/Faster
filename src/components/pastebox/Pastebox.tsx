import React, {useContext} from 'react'

import '../main/Main.css'
import './Pastebox.css'

//Components 
import ToolbarButton from '../misc/buttons/ToolbarButton'

// Context 
import {Context} from '../../context/Context'

function Pastebox() {

  // Context
  const context = useContext(Context);
  if (!context) {
    // In case context is undefined. It never is though.
    return null;
  }

  let placeholder = `#include <iostream>
  #include <string>
  
  class User {
  private:
      std::string username;
      int age;
  
  public:
      // Constructor
      User(std::string name, int userAge) : username(name), age(userAge) {}
  
      // Method to display user information
      void displayUserInfo() {
          std::cout << "Username: " << username << std::endl;
          std::cout << "Age: " << age << " years old" << std::endl;
      }
  };
  
  int main() {
      // Creating an instance of the User class
      User user1("Alice", 25);
  
      user1.greetUser();
  
      return 0;
  }`;


  return (
    <div id='pastebox-container'>
      <textarea id='pastebox' placeholder={placeholder}></textarea>
      <div id='pastebox-toolbar'>
        <ToolbarButton text={'Save'} function={function(){context.displaySaveModal()}}/>
        <ToolbarButton text={'Copy'} function={function(){}}></ToolbarButton>
        <ToolbarButton text={'Paste'} function={function(){}}></ToolbarButton>
      </div>
      
    </div>
  )
}

export default Pastebox
