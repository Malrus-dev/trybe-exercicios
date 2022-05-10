const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1
function addPropertyToObj(obj, key, value) {
  obj[key] = value; 
}

addPropertyToObj(lesson2, 'turno', 'noite');

// 2
function getKeys(obj) {
  return Object.keys(obj);
}

// 3
function getLength(obj) {
  return Object.keys(obj).length;
}

// 4
function getValues(obj) {
  return Object.values(obj);
}

// 5
const allLessons = {};
allLessons.lesson1 = Object.assign({}, lesson1);
allLessons.lesson2 = Object.assign({}, lesson2);
allLessons.lesson3 = Object.assign({}, lesson3);

// 6
function studdentsCount(obj) {
  return allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;
}

// 7
function getValueByNumber(obj, pos) {
  return Object.values(obj)[pos];
}

// 8 
function verifyPair(obj, key, value) {
  if (obj[key] === value) {
    return true;
  } else {
    return false;
  }
}

// bonus 1
function frequency(matterV) {
  const matterK = 'materia';
  const students = 'numeroEstudantes';
  let count = 0;
  for(let index = 1; index < 4; index += 1) {
    if (allLessons[`lesson${index}`][matterK] === matterV) {
      count += allLessons[`lesson${index}`][students];      
    }
  }  
  return count;
}

//bonus 2
function createReport(obj, teatcher) {
  const proff = 'professor';
  const matter = 'materia';
  const studentsNum = 'numeroEstudantes';
  let countStudents = 0;
  let arrayClass = [];
  for(let index = 1; index < 4; index += 1) {
    if (obj[`lesson${index}`][proff] === teatcher) {
      countStudents += obj[`lesson${index}`][studentsNum];
      arrayClass.push(obj[`lesson${index}`][matter]);
    }
  }
  const newObj = { 'professor' : teatcher, 'aulas' : arrayClass, 'estudantes' : countStudents };
  return newObj
}

console.log(createReport(allLessons, 'Maria Clara'));
