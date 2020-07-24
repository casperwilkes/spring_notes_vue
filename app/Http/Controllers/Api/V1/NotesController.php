<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\NoteRequest;
use App\Note;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

/**
 * Class NotesController
 * @package App\Http\Controllers\Api\v1
 */
class NotesController extends Controller {

    public function __construct() {
        $this->authorizeResource(Note::class, 'note');
    }

    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse {
        $notes = Note::paginate(10);

        $notes->each(function($item){
            $item->body = Str::limit($item->body, 250);
        });

        return response()->json($notes, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param NoteRequest $request
     * @return JsonResponse
     */
    public function store(NoteRequest $request): JsonResponse {
        $note = new Note();
        $note->fill($request->validated());
        $note->user_id = Auth::id();
        $note->save();

        return response()->json($note, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param Note $note
     * @return JsonResponse
     */
    public function show(Note $note): JsonResponse {
        return response()->json($note, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param NoteRequest $request
     * @param Note $note
     * @return JsonResponse
     */
    public function update(NoteRequest $request, Note $note): JsonResponse {
        $validated = $request->validated();

        $note->update($validated);

        return response()->json($note, 201);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Note $note
     * @return JsonResponse
     * @throws Exception
     */
    public function destroy(Note $note): JsonResponse {
        $note->delete();

        return response()->json(null, 204);
    }
}
