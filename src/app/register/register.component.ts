import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public registerForm:any=new FormGroup({
    FirstName:new FormControl('Harshil',[Validators.required]),
    LastName:new FormControl('Prajapati',[Validators.required]),
    Email:new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    Phone:new FormControl('',[Validators.required]),
    Address:new FormControl('',[Validators.required]),
    Password:new FormControl('',[Validators.required,Validators.maxLength(6)]),
    ConfirmPassword:new FormControl('',[Validators.required]),
  })
  getStoreData()
  {
    localStorage.setItem('UserData',JSON.stringify(this.registerForm.value));

  }
  ngOninit()
  {
    this.registerForm();
  }
}
