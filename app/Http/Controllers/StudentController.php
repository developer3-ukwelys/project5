<?php

namespace App\Http\Controllers;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StudentController extends Controller
{
    public function fetchStudents(){

        $students = DB::table('students')->get();

       // dd($students);

        return view('students.student',compact('students'));

    }
    public function insertdata(){

        $students = DB::table('students')
        ->insert([
            'name' =>'mark' , 'email'=> 'markoshabe@gmail.com' , 'phone'=> '0706222347'
        ]);
        return view('students.student');
    }

}
