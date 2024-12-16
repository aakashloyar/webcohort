//now let us study classes

class animal{
    
    constructor(name,voice) {
        this.name=name;
        this.voice=voice;
    }
    greet() {
        console.log(`${this.name} makes a sound ${this.voice}`);
    }
}
const cat=new animal("cat","meow");
const dog=new animal("dog","bark");
cat.greet();
dog.greet();
