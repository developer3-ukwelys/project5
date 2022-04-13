<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Http\Response;


class ProjectController extends Controller
{
      /**
     * Display a listing of the resource.
     *
     */
    public function index()
    {
        $projects = Project::select('id','title','description')-> orderBy('id','asc')->get();
        return view('projects.index')->with(compact('projects'));
    }

    /**
     * Store a newly created resource in storage.
     *
     */
    public function store(Request $request)
    {
        //dd($request->all());
        $data = $request->validate([
            'title' => 'required',
            'description' => 'required'
        ]);
        //if($data)

        $project = Project::create(
            ['title'=>$data['title'],
            'description'=>$data['description']
        ]);

        return response()->json($project);

    }
}
