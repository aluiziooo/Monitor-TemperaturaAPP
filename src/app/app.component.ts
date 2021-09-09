import { CidadeService } from './cidade.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Monitor-Temperatura';

  public form: FormGroup;

  constructor(private fb: FormBuilder, private cs: CidadeService) {
    this.form = this.fb.group({
      cep: ['', Validators.compose([
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.required
      ])]
    });
  }

  addPorCEP(){
    const cep = this.form.controls['cep'].value;
    this.cs.addPorCEP(cep).subscribe(
      success => console.log('sucesso'),
      error => console.error(error)
    )
  }

}
