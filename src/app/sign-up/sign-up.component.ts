import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  // @ViewChild('form') myForm: NgForm | undefined;
  submitMyForm(form: HTMLFormElement) {
    console.log(this.myForm);

  }
}
