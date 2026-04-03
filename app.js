 
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