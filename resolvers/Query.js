exports.Query = {
  students: (parent, { filter }, { db }) => {
    let presentStudents = db.students;
    if (filter) {
      const { isPresent } = filter;
      if (isPresent) {
        presentStudents.filter((student) => student.isPresent);
      }
    }
    return presentStudents;
  },
  teachers: (parent, args, { db }) => db.teachers,
  student: (parent, { id }, { db }) => {
    return db.students.find((student) => student.id === id);
  },
  teacher: (parent, { id }, { db }) => {
    return db.teachers.find((teacher) => teacher.id === id);
  },
};
