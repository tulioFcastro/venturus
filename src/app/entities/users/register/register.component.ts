import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {GeneralService} from '../../../services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  rideOnGroupOptions = [];
  selectedRideOnGroup: { [key: string]: any } = {
    value: null,
    description: null
  };
  daysOfWeek;
  @Output() saveUserEmitter = new EventEmitter();
  constructor(private fb: FormBuilder,
              private generalService: GeneralService) {
    this.form = fb.group({
      'username': [null, [Validators.required]],
      'name': [null, [Validators.required]],
      'email': [null, [Validators.required]],
      'city': [null, []]
    });
  }

  ngOnInit() {
    this.fetchDaysOfWeek();
    this.fetchRideOnGroup();
  }

  onSelectionChange(entry) {
    // clone the object for immutability
    this.selectedRideOnGroup = Object.assign({}, this.selectedRideOnGroup, entry);
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

  fetchDaysOfWeek() {
    this.generalService.getDaysOfWeek().subscribe(
      (data) => {
        data.map(day => day.checked = false );
        this.daysOfWeek = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  fetchRideOnGroup() {
    this.generalService.getRideOnGroupOptions().subscribe(
      (data) => {
        this.rideOnGroupOptions = data;
        this.onSelectionChange(this.rideOnGroupOptions[0]);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
