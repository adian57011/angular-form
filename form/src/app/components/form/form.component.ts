import { Component} from '@angular/core';
import { User } from 'src/app/user';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
 
})

export class FormComponent {
  userModel = new User("","","","");

  onSubmit()
  {
    console.log("Form Submitted",this.userModel)
  }
}
