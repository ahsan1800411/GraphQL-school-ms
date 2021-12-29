const { v4: uuid } = require('uuid');
exports.Mutation = {
  addTeacher: (parent, { input }, { db }) => {
    const { name } = input;
    const newTeacher = {
      id: uuid(),
      name,
    };
    db.teachers.push(newTeacher);
    return newTeacher;
  },
  addStudent: (parent, { input }, { db }) => {
    const { name, age, isPresent, marks, teacherId, image } = input;
    const newStudent = {
      id: uuid(),
      name,
      age,
      isPresent,
      marks,
      teacherId,
      image,
    };
    db.students.push(newStudent);
    return newStudent;
  },
  updateStudent: (parent, { id, input }, { db }) => {
    const index = db.students.findIndex((s) => s.id === id);
    db.students[index] = {
      ...db.students[index],
      ...input,
    };
    return db.students[index];
  },
  deleteStudent: (parent, { id }, { db }) => {
    db.students = db.students.filter((student) => student.id !== id);
    db.reviews = db.reviews.filter((review) => review.studentId !== id);
    return true;
  },
};
