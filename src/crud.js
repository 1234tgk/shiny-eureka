import fs from "fs";

const path = "src/data.csv";

// CRUD -> create read update delete

// read "reads" the database and returns the entire, or part of the rows
// this operation does not change the content of the database
export const read = () => {
  const data = fs.readFileSync(path).toString().split("\n");

  data.shift();

  return data.map((row) => {
    const [id, name, grade] = row.split(",");
    return {
      id,
      name,
      grade,
    };
  });
};

// create "creates" new entry in our database
// this operation will change the content of the database
// to be more exact, the number of rows will increase
export const create = (data) => {
  fs.appendFileSync(path, `\n${data.id},${data.name},${data.grade}`);
};

// update "updates" one of the entry in our database
// content of the db will change, however, the number of rows will not change
export const update = (data) => {
  // 0. we need to read the database
  const students = read();
  // 1. we need to find the student with the corresponding student iD
  let targetIndex = -1;
  for (let i = 0; i < students.length; i++) {
    if (students[i].id == data.id) {
      targetIndex = i;
      break;
    }
  }

  if (targetIndex === -1) {
    return;
  }
  // 2. we need to "update" the detail of that id within the file

  // change the detail of the object with the given data
  students[targetIndex] = data;
  // turn back the array of objects into the block of string
  let string = "ID,Name,Grade";
  students.map((student) => {
    string += `\n${student.id},${student.name},${student.grade}`;
  });
  // "write" the block of string into the file
  fs.writeFileSync(path, string);
};

// delete "deletes" one of the entry from our database
// # of rows decrease
