import { Component, OnInit } from '@angular/core';

import {FormBuilder,FormGroup,Validators,FormControl} from '@angular/forms';


@Component({
    selector: 'app-taller',
    templateUrl: './taller.component.html',
    styleUrls: ['./taller.component.scss']
    })
    export class TallerComponent implements OnInit {
  



    constructor(private fb: FormBuilder) {}

        loginForm: FormGroup;
        nombre: string;
        apellido: string;
        mail:string;
        password: string;
        message: string;
        mensaje: string;

        ngOnInit() {

        this.updateName();
        this.nombre='';
        this.apellido='';
        this.mail='';
        this.password='';
        this.message= '';
        this.mensaje='';
      }



        updateName() {
        this.loginForm=this.fb.group({nombre:['',[Validators.required]],
        apellido:['',[Validators.required]],
        mail:['',[Validators.required]],
        password:['',[Validators.required,Validators.minLength(3)]]});
        }

        validaDatos=()=>{
          if( this.loginForm.valid){ 
            this.nombre=this.loginForm.controls['nombre'].value;
            this.apellido=this.loginForm.controls['apellido'].value;
            this.mail=this.loginForm.controls['mail'].value;
            this.password=this.loginForm.controls['password'].value;
            this.message='datos correctos';
        

     }else{
      this.message='ingrese datos';
     }

  }

}
