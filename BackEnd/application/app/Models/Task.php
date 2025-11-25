<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasAttributes;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasAttributes;

    protected $table = 'Tasks';

    protected $fillable = ['title', 'completed'];
}
