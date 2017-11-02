
//import, inject and create variable in the constructor
import {inject} from 'aurelia-framework'; //import modules into home object
import {Router} from 'aurelia-router'; //The router we configured
import { Users } from '../resources/data/users';

@inject(Router, Users)

export class Home {
    constructor(router, Users){
        this.router = router;
        this.users = users;
        this.message = "Home";
        this.showLogin = true;
    }

    
    login(){
        this.router.navigate('list');

            
    }

    showRegister(){
        this.user = {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
            }
            this.registerError = "";
        this.showLogin = false;
    }

      async save() {
              let serverResponse = await this.users.save(this.user);
              if (!serverResponse.error) {
                this.showLogin = true;
              } else {
                this.registerError = "There was a problem registering the user."
              }
        }
        
    
    save(){
        this.showLogin = true
    }
    

}
