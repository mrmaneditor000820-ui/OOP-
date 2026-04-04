 
class Students {
    constructor (sname,sage,sclass,sid,sroll){
        this.sname=sname
        this.sage=sage
        this.sclass=sclass
        this.sid=sid
        this.sroll=sroll
    }

    Studentsdata(){
        console.log(`student name is ${this.sname} and age is ${this.sage}`)
    }
}

const student1 = new Students ("ali",20)
student1.Studentsdata()

// Abstruction First piller of oop 
// absraction me kisis user ko wo chizen dete hein jis ki ose zarorat ho bas baki piche kiya kam hoa hy os ka nai bta te wo hide rehta hy user se 

function area (length){
  return 5 * length      
}
console.log(area(10))

