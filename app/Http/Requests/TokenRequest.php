<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

/**
 * Class TokenRequest
 * @package App\Http\Requests
 */
class TokenRequest extends FormRequest {

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool {
        return $this->user() !== null;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array {
        return [
            'token_name' => [
                'required',
                'string',
                'min:5',
                'max:50',
                Rule::unique('personal_access_tokens','name')->where(function ($query) {
                    $query->where('tokenable_id', $this->user()->id);
                }),
            ],
        ];
    }
}
