import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.scss']
})
export class FormularioReactivoComponent implements OnInit {
  loginform: FormGroup;
  nombre: string;
  apellido: string;
  mail: string;
  password: string;
  telefonos: string[]

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.loginform = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.pattern('[A-Z]{1}[a-z]{1,16}[^0-9]')]],
      apellido: ['', [Validators.required, Validators.pattern('[A-Z]{1}[a-z]{1,16}[^0-9]')]],
      mail: ['', [Validators.required, Validators.pattern('[a-z]+[a-z 0-9._-]*@[a-z]+[a-z 0-9]*[a-z]{2,3}[.]?[a-z]*')]],
      password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{5,10}')]],
     // telefonos: this.formBuilder.array([this.formBuilder.group({ telefono: ['', [Validators.required, Validators.pattern('[0-9]{10}')]] })]),
    });
  }
  validaDatos() {
    if (this.loginform.valid) {
      this.nombre = JSON.stringify(console.log(this.loginform.controls['nombre'].value))
      this.apellido = JSON.stringify(console.log(this.loginform.controls['apellido'].value))
      this.mail = JSON.stringify(console.log(this.loginform.controls['mail'].value))
      this.password = JSON.stringify(console.log(this.loginform.controls['password'].value))
    } else {
      this.nombre = JSON.stringify(this.loginform.controls['nombre'].errors)
      this.apellido = JSON.stringify(this.loginform.controls['apellido'].errors)
      this.mail = JSON.stringify(this.loginform.controls['mail'].errors)
      this.password = JSON.stringify(this.loginform.controls['password'].errors)

      if (this.loginform.invalid) {
        console.log(`nombre ${this.nombre}`),
          console.log(`apellido ${this.apellido}`),
          console.log(`mail ${this.mail}`),
          console.log(`password ${this.password}`)
      }
    }

  }
}
