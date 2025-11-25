<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TaskRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => [
                'required',
                'string',
                'min:5',
                'max:200',
                'regex:~[a-zA-Z]~'
            ],
            'completed' => 'sometimes|boolean',
        ];
    }

    public function messages(){
        return [
            'title.required' => 'Campo titulo é obrigatorio',
            'title.min' => 'O campo titulo tem ser maior que :min caracteres',
            'title.string' => 'O campo titulo tem ser do tipo string',
            'title.regex' => 'O campo titulo deve conter pelomenos uma letra',

            'completed.boolean' => 'O campo completed tem ser do tipo booleano' 
        ];
    }
}
