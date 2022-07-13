abstract class Person {
  private name: string;
  private birthDate?: Date;

  constructor(name: string, birthDate?: Date){
    this.isvalidName(name)
    this.name = name,
    this. birthDate = birthDate
  }

  get getName(): string{
    return this.name;
  }

  set setName(name: string){
    this.isvalidName(name)
    this.name = name;
  }

  get getBirthDate(): Date | undefined{
    return this.birthDate;
  }

  set setBirthDate(birthDate: Date){
    this.birthDate = birthDate
  }

  private isvalidName(name: string): boolean {
    if(name.length <= 3) throw new Error('O nome precisa ter mais de 3 caracteres')
    return true;
  }

  abstract somar(x:number, y:number): number
}

export default Person;