<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TaskController extends Controller
{
   public function index(){
        $tasks = DB::table('Tasks')->select('id', 'title', 'completed')->get();

        if($tasks->isEmpty()){
            return response()->json([
                'message' => 'Nenhum registro encontrado',
                'data' => []
            ]);
        }

        return response()->json($tasks);
    }

    public function store(Request $request){
        $request->validate([
            'title' => 'required|string|max:200',
        ]);

        $task = Task::create([
            'title' => $request->title,
        ]);

        return response()->json($task, 201);
    }

    public function update(Request $request, Task $task){
        $request->validate([
            'title' => 'requirede|string|max:200',
            'completed' => 'sometimes|boolean'
        ]);

        $task->update($request->only('title', 'completed'));

        return response()->json($task);
    }

    public function destroy(Task $task){
        $task->delete();

        return response()->json(null, 204);
    }
}
