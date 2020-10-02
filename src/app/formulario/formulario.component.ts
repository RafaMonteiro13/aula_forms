import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../model/pessoa';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  profissoes = ['Engenheiro', 'Professor', 'Químico', 'Zoólogo'];
  pessoa: Pessoa = new Pessoa();
  
    

  constructor() { }

  ngOnInit(): void {
  }
  

  salvar(pessoaForm) {
    /*this.pessoa.nome = pessoaForm.value.nome;
    this.pessoa.fone = pessoaForm.value.fone;
    this.pessoa.email = pessoaForm.value.email;
    this.pessoa.profissao = pessoaForm.value.profissao;*/
    console.log(this.pessoa);
    console.log(pessoaForm);
    }

}