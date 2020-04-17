class student {
    constructor(sId, sName, sSName){
            this.id = sId;
            this.name = sName;
            this.school = sSName;
            this.bio = "3 student is goods";
    }
}

const student1 = new student (874, "Sojib", "IPH School");
const student2 = new student (675, "Masum", "Dhaka School");
const student3 = new student (536,"Himu", "US School");
console.log(student1, student2, student1);
