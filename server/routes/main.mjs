import express from 'express';
import { updateStudent } from '../controllers/course.mjs';
import { deleteStudent } from '../controllers/course.mjs';
import { getSingleStudent } from '../controllers/course.mjs';
import { getAllStudents } from '../controllers/course.mjs';
import { createStudent } from '../controllers/course.mjs';

const router = express.Router();
router.post('/courses', createStudent);
router.get('/courses', getAllStudents);
router.get('courses', getSingleStudent);
router.patch('/courses/:studentId', updateStudent);
router.delete('/courses/:studentId', deleteStudent);

export default router;