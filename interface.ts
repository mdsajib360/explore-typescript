interface Player {
  name: string;
  club: string;
  salary: number;
  wife?: string;
  previousClubs?: string[];
}

const messy: Player = {
  name: "L Messy",
  club: "Abahoni",
  salary: 12000,
  wife: "Antonela Roccuzzo",
  
};

const hannan: Player ={
  name: 'A. Hannan',
  club: 'Kolabagan',
  salary: 2000,
}

interface Employee {
    name: string,
    designation: string,
    salary: number,
    age: number,
}

interface Developer extends Employee{
  language: string;
  codeEditor: string;
  typingSpeed: number;
}

const zuku: Developer = {
    name: 'Zukerberg',
    salary: 11000,
    age: 31,
    designation:'Facebooker',
    language: "js",
    codeEditor: "Vs Code",
    typingSpeed: 65
}

let fullName2 = (first: string, last: string) => first + last;
