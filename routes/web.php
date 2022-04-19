<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\FormValidationController;
use App\Http\controllers\StudentController;



/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

// Route::get('/', [ProjectController::class, 'index']);

Route::get('/projects', [App\Http\Controllers\ProjectController::class]);

Route::get('/form', [FormValidationController::class, 'createUserForm']);
Route::post('/form', [FormValidationController::class, 'UserForm'])->name('validate.form');

Route::get('/students', [StudentController::class, 'fetchStudents']);
Route::get('/insert', [StudentController::class, 'insertdata']);
