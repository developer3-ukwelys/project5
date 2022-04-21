<?php

namespace App\Http\Controllers;
use App\Models\FIle;
use Illuminate\Http\Request;



class FIleUploadController extends Controller
{
    Public function index(){
        return view('file-upload');
    }

    Public function store(Request $request){
        $validateData = $request-> validate([
            'file' =>  'required|mimes:csv,txt,xlx,xls,pdf|max:2048',
                ]);
                $name= $request->file('file')->getClientOriginalName();
                $path= $request->file('file')->store('public/files');

                $save=new File;
                $save->name=$name;
                $save->path=$path;

                return redirect('file-upload')->with('status','File has been uploaded successfuly in laravel 8');
    }


}
