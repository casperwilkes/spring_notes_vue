<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\TokenRequest;
use App\User;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;

class TokensController extends Controller {

    /**
     * Store a newly created resource in storage.
     *
     * @param TokenRequest $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(TokenRequest $request): JsonResponse {
        $this->authorize('createToken', $request->user());

        $validated = $request->validated();
        $token = $request->user()->createToken($validated['token_name']);

        return response()->json([$token->plainTextToken]);
    }

    /**
     * Display the specified resource.
     *
     * @param User $user
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function show(User $user): JsonResponse {
        $this->authorize('viewToken', $user);

        return response()->json($user->tokens);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param User $user
     * @param int|null $token_id
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function destroy(User $user, $token_id = null): JsonResponse {
        $this->authorize('deleteToken', $user);
        // delete the token //
        $user->tokens()->where('id', $token_id)->delete();

        return response()->json($user->tokens, 204);
    }
}
