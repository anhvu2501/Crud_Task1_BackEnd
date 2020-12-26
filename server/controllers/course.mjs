import mongoose from 'mongoose';
import Course from '../models/course.mjs';

//Create new cause
export function createStudent(req, res) {
    const student = new Student({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        class: req.body.class,
    });

    return student 
        .save()
        .then((newStudent) => {
            return res.status(201).json ({
                success: true,
                message: 'New student created successfully',
                Student: newStudent,
            });
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.',
                error: error.message,
            });
        });
}

export function getAllStudents(req, res) {
    Student.find()
      .select("_id name age email class")
      .then((allStudents) => {
        return res.status(200).json({
          success: true,
          message: "Get all students",
          Student: allStudents,
        });
      })
      .catch((error) => {
        res.status(500).json({
          success: false,
          message: "Server error. Please try again.",
          error: error.message,
        });
      });
  }
  
  export function getSingleStudent(req, res) {
    const id = req.params.studentId;
    Student.findById(id)
      .then((std) => {
        res.status(200).json({
          success: true,
          message: `About ${std.name}`,
          Student: std,
        });
      })
      .catch((error) => {
        res.status(500).json({
          success: false,
          message: "This student does not exist",
          error: error.message,
        });
      });
  }


  export function updateStudent(req, res) {
    const id = req.params.studentId;
    const updateStudent = req.body;
    Student.update({ _id: id }, { $set: setStudent })
      .exec()
      .then(() => {
        res.status(200).json({
          success: true,
          message: "Student is updated",
          updateStudent: updateStudent,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: "Server error. Please try again.",
          error: err.message,
        });
      });
  }
  
  export function deleteStudent(req, res) {
    const id = req.params.studentId;
    Student.findByIdAndRemove(id)
      .exec()
      .then(() =>
        res.status(204).json({
          success: true,
        })
      )
      .catch((err) =>
        res.status(500).json({
          success: false,
          error: err.message,
        })
      );
  }

