import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  entries = [];
  selectedEntry: { [key: string]: any } = {
    value: null,
    description: null
  };
  options = [
    {name: 'Sun', value: '1', checked: false},
    {name: 'Mon', value: '2', checked: false},
    {name: 'Tue', value: '3', checked: false},
    {name: 'Wed', value: '4', checked: false},
    {name: 'Thu', value: '5', checked: false},
    {name: 'Fri', value: '6', checked: false},
    {name: 'Sat', value: '7', checked: false}
  ];
  @Output() saveUserEmitter = new EventEmitter();
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      'username': [null, [Validators.required]],
      'name': [null, [Validators.required]],
      'email': [null, [Validators.required]],
      'city': [null, []]
    });
  }

  ngOnInit() {
    this.entries = [
      {
        description: 'Always',
        id: 1
      },
      {
        description: 'Sometimes',
        id: 2
      },
      {
        description: 'Never',
        id: 3
      }
    ];

    this.onSelectionChange(this.entries[0]);
  }

  onSelectionChange(entry) {
    // clone the object for immutability
    this.selectedEntry = Object.assign({}, this.selectedEntry, entry);
  }

  saveUser() {
    const user = {
      username: this.form.controls['username'].value,
      name: this.form.controls['name'].value,
      email: this.form.controls['email'].value,
      address: {city: this.form.controls['city'].value},
      posts: [],
      albums: [],
      photos: []
    };
    this.saveUserEmitter.emit(user);
    this.clearFields();
  }

  clearFields() {
    this.form.controls['username'].setValue(null);
    this.form.controls['name'].setValue(null);
    this.form.controls['email'].setValue(null);
    this.form.controls['city'].setValue(null);
  }
}
