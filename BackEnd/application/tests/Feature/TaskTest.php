<?php

namespace Tests\Feature;

use App\Models\Task;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class TaskTest extends TestCase
{

    use RefreshDatabase;

    /**
     * A basic feature test example.
     */
    public function test_example(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    /** @test */
    public function list_all_task()
    {
        Task::factory()->count(3)->create();

        $response = $this->getJson('/api/tasks');

        $response->assertStatus(200)
            ->assertJsonCount(3, 'data');
    }

    /** @test */
    public function register_task()
    {
        $response = $this->postJson('/api/tasks', [
            'title' => 'Comprar pão',
        ]);

        $response->assertStatus(201);
        $this->assertDatabaseHas('tasks', [
            'title' => 'Comprar pão',
            'completed' => false
        ]);
    }

    /** @test */
    public function updateTask()
    {
        $task = Task::factory()->create([
            'title' => 'titulo inicial'
        ]);

        $response = $this->putJson("/api/tasks/{$task->id}", [
            'title' => 'titulo novo'
        ]);

        $response->assertStatus(200);

        $this->assertDatabaseHas('tasks', [
            'id' => $task->id,
            'title' => 'titulo novo'
        ]);
    }

    /** @test */
    public function remove_task()
    {
        $task = Task::factory()->create();

        $response = $this->deleteJson("/api/tasks/{$task->id}");

        $response->assertStatus(204);

        $this->assertDatabaseMissing('tasks', [
            'id' => $task->id
        ]);
    }

    /** @test */
    public function errorCreateTask()
    {
        $response = $this->postJson('/api/tasks', [
            'title' => ''
        ]);

        $response
            ->assertStatus(422)
            ->assertJsonValidationErrors(['title']);
    }
}
