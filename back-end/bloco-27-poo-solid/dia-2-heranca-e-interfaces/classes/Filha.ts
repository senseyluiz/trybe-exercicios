import Person from "./Person";
import IOperacao from "./interface";

export  default class Filha extends Person implements IOperacao{
  constructor(name: string){
    super(name, new Date() )
  }
  
  somar(x:number, y:number){
    return x + y
  }

  subtrair(x:number, y:number){
    return x- y
  }
  dividir(x:number, y:number){
    return x / y
  }

  
}

