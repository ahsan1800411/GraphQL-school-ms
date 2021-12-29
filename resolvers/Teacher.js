exports.Teacher = {
  students: ({ id }, args, { db }) => {
    return db.students.filter((student) => student.teacherId === id);
  },
};
