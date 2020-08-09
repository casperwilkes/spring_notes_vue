<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Note;
use App\User;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * Class UsersController
 * @package App\Http\Controllers\Api\v1
 */
class UsersController extends Controller {

    public function __construct() {
        $this->authorizeResource(User::class, 'user');
    }

    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse {
        $users = User::paginate(10);

        return response()->json($users, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param User $user
     * @return JsonResponse
     */
    public function show(User $user): JsonResponse {
        return response()->json($user, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UserRequest $request
     * @param User $user
     * @return JsonResponse
     */
    public function update(UserRequest $request, User $user): JsonResponse {
        $user->update($request->validated());

        return response()->json($user, 202);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param User $user
     * @return JsonResponse
     * @throws Exception
     */
    public function destroy(User $user): JsonResponse {
        $user->delete();

        return response()->json(null, 204);
    }

    /**
     * Gets notes associated with user
     * @param Request $request
     * @param User $user
     * @return JsonResponse
     */
    public function notes(Request $request, User $user): JsonResponse {
        // Pagination per page //
        $per_page = 10;

        // Filter down page by sort order //
        if ($request->has('filter')) {
            if ($request->filter === 'oldest') {
                $order = 'asc';
            } else {
                // Default sort //
                $order = 'desc';
            }

            $notes = $user->notes()->orderBy('created_at', $order)->paginate($per_page);
        } else {
            $notes = $user->notes()->paginate($per_page);
        }

        // Individual note specific //
        $notes->each(function ($item) {
            // Add comment count //
            $item->comment_count = $item->comments()->count();
            // Trim body length //
            $item->body = Str::limit($item->body, 250);
        });

        return response()->json($notes, 200);
    }

    /**
     * Gets the currently logged in user
     * @param Request $request
     * @return JsonResponse
     */
    public function fetch(Request $request): JsonResponse {
        $user = $request->user();
        $user->verified = $request->user()->verified;

        return response()->json($user);
    }

    /**
     * Changes currently logged in user's password
     * @param Request $request
     * @return JsonResponse
     */
    public function changePassword(Request $request): JsonResponse {
        $request->validate(
            [
                'password_current' => 'required|password',
                'password' => 'required|confirmed|different:password_current|min:8',
            ],
            [],
            [
                'password_current' => 'current password',
            ]
        );

        $user = $request->user();
        $user->password = Hash::make($request->password);
        $user->update();

        return response()->json($user, 202);
    }
}
