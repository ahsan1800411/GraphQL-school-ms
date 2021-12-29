exports.Student = {
  teacher: (parent, args, { db }) => {
    const teacherId = parent.teacherId;
    return db.teachers.find((teacher) => teacher.id === teacherId);
  },
  reviews: ({ id }, args, { db }) => {
    return db.reviews.filter((review) => review.studentId === id);
  },
};
