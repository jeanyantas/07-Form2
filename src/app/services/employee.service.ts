import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public isValidField( form: FormGroup, field: string ): Boolean | null{
    return form.controls[field].errors && form.controls[field].touched;
  }
}
