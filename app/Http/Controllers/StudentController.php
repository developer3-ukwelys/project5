<?php

namespace App\Http\Controllers;
use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function fetchStudents(){

        $students = Student::where('id',3)->get();
        return $students;
    }
}
