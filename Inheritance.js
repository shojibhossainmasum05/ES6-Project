class Parent {
    constructor(){
        this.fatherName = "mojibor Rohoman";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
}
  getFullName(){
      return this.name + " " + this.fatherName;
      }
const baby = new Child ("Masum");
const baby2 = new Child ("Sojib");
console.log(baby.getFullName());
console.log(baby2.getFullName());

