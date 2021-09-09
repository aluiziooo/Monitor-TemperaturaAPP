import { CidadeService } from './../cidade.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { cep } from '../cep.module';

@Component({
  selector: 'app-add-cidade',
  templateUrl: './add-cidade.component.html',
  styleUrls: ['./add-cidade.component.css']
})
export class AddCidadeComponent implements OnInit {

  cep:cep = {
    cep:''
  }

  public form!: FormGroup;

  constructor(private fb: FormBuilder, private cs: CidadeService) {
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
    this.cep.cep = this.form.controls['cep'].value;
    console.log(this.cep);
    this.cs.addPorCEP(this.cep);
  }

}
