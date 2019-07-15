import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-schema',
  templateUrl: './form-schema.component.html',
  styleUrls: ['./form-schema.component.scss']
})
export class FormSchemaComponent implements OnInit {

  private inputfield: any = [];

  constructor() {
    console.log("Form component created");
  }

  ngOnInit() {
    console.log(" : json schema intilization : ");
    this.inputfield = [
      { type: 'text', name: 'firstname', value: '', placeholder: 'Your Firstname here', required: false },
      { type: 'text', name: 'lasttname', value: '', placeholder: 'Your Lastname here', required: false },
      { type: 'email', name: 'email', value: '', placeholder: 'Your email here', required: true },
      { type: 'password', name: 'password', value: '', placeholder: 'Your password here', required: false }
    ]
  }

  send() {
    for (let entry of this.inputfield) {
      console.log("++++++++++++++++++++");
      console.log("key is : " + entry.name);
      console.log("value is : " + entry.value);
      console.log("++++++++++++++++++++");
    }
  }

}