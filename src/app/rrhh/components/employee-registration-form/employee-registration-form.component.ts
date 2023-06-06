import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'rrhh-employee-registration-form',
  templateUrl: './employee-registration-form.component.html',
  styles: [
  ]
})
export class EmployeeRegistrationFormComponent implements OnInit {

  public formRegistrationEmployee: FormGroup = this.fb.group({
    name: [ '', [Validators.required], [] ],
    email: [ '', [Validators.required], [] ],
    phone: [ '', [Validators.required, Validators.minLength(9)], [] ],
    position: this.fb.array([
      ['Desarrollador fullstack', Validators.required],
      ['Desarrollador backend', Validators.required],
      ['Desarrollador frontend', Validators.required],
      ['Diseñador', Validators.required],
      ['Gerente', Validators.required],
    ]),
    departament: this.fb.array([
      ['Ventas', Validators.required],
      ['Recursos Humanos', Validators.required],
      ['Tecnología', Validators.required],
      ['Contabilidad', Validators.required],
    ]),
    date: [ '', [Validators.required], [] ],
    address: [ '', [Validators.required], [] ],
  })

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
  ) {  }
  ngOnInit(): void {
    // Obtener una referencia al FormGroup
    const formGroup = this.formRegistrationEmployee;
    // Obtener una referencia al control de tipo array
    const arrayControl = formGroup.get('position') as FormArray;
    console.log(arrayControl.value[0])
  }

  // Método para validar los controles del formulario tienen errores y fueron tocados
  public isValidField( field: string ) {
    return this.employeeService.isValidField( this.formRegistrationEmployee, field );
  }
  // public isValidField( field: string ): Boolean | null{
  //   return this.formRegistrationEmployee.controls[field].errors && this.formRegistrationEmployee.controls[field].touched;
  // }

  public onSubmit(): void {
    this.formRegistrationEmployee.markAllAsTouched();
    if ( this.formRegistrationEmployee.valid ) {
      console.log( this.formRegistrationEmployee.value );

      // Resetear todos los controles del formulario excepto position y departament
      // const { position, departament, ...rest } = this.formRegistrationEmployee.controls;
      // this.formRegistrationEmployee.reset(rest);
      // Obtener los arrays de position y departament
      // const positionArray = this.formRegistrationEmployee.get('position') as FormArray;
      // const departamentArray = this.formRegistrationEmployee.get('departament') as FormArray;
      // Establecer los valores iniciales de position y departament
      // const initialPosition = positionArray.at(0).value;
      // const initialDepartament = departamentArray.at(0).value;
      // positionArray.patchValue([initialPosition]);
      // departamentArray.patchValue([initialDepartament]);

      // Obtener los valores actuales de position y departament
      const currentPosition = this.formRegistrationEmployee.get('position')?.value;
      const currentDepartament = this.formRegistrationEmployee.get('departament')?.value;
      // Resetear todos los controles del formulario
      this.formRegistrationEmployee.reset();
      // Establecer los valores actuales de position y departament
      this.formRegistrationEmployee.get('position')?.patchValue(currentPosition);
      this.formRegistrationEmployee.get('departament')?.patchValue(currentDepartament);


    }
  }

}
