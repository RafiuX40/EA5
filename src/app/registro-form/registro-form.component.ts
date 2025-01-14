import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-form',
  templateUrl: './registro-form.component.html',
  styleUrls: ['./registro-form.component.scss']
})
export class RegistroFormComponent {
  @Output() registroCompletado = new EventEmitter<any>();

  registroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      edad: ['', [Validators.required, Validators.min(18)]],
      aceptarTerminos: [false, Validators.requiredTrue]
    });
  }

  enviarFormulario() {
    if (this.registroForm.valid) {
      this.registroCompletado.emit(this.registroForm.value);
      this.registroForm.reset();
    }
  }
}

