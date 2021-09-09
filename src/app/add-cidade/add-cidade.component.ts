import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-cidade',
  templateUrl: './add-cidade.component.html',
  styleUrls: ['./add-cidade.component.css']
})
export class AddCidadeComponent implements OnInit {

  public form!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      cep:['', Validators.compose([
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.required
      ])]
    });
  }

  ngOnInit(): void {
  }
  salvar(){
    const cep = this.form.controls['cep'].value;
    console.log(cep);
  }

}
