class Person{
    constructor(){
        this.name="Nguyen Minh Tuan";
        this.age="20";
    }
    getName(){
        return this.name;
    }
    setAge(age){
        this.age=this.age;
    }
    getAge(){
        return this.age;
    }
}
var person = new Person();
person.setAge(40);
console.log("Ten Nguoi: "+person.getName());
console.log("Tuoi: "+person.getAge());
class Student extends Person{
    constructor(name,age,id){
        super(name,age);
        this.id="001";
    }
    getStudentinfo(){
        return "Ten: "+this.getName()+"-Tuoi: "+this.getAge()+"-ID: "+this.id;
    }
}
var student = new Student();
console.log(student.getStudentinfo());
