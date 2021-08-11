import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  myReactiveForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'userDetails': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'password': new FormControl(null, Validators.max(5)),
      'checkbox': new FormControl(null, Validators.required)
    })
  }

  onSubmit() {
    console.log("Form submitted")
    console.log(this.myReactiveForm)
    console.log(this.myReactiveForm.value)
  }

}
