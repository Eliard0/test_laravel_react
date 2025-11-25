<?php

namespace App\Http\Controllers;

use App\Http\Requests\TaskRequest;
use App\Models\Task;
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

    public function store(TaskRequest $request){

        $task = Task::create($request->validated());

        return response()->json($task, 201);
    }

    public function update(TaskRequest $request, Task $task){

        $task->update($request->validated());

        return response()->json($task);
    }

    public function destroy(Task $task){
        $task->delete();

        return response()->json(null, 204);
    }
}
