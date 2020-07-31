<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Note;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * Class SearchController
 * @package App\Http\Controllers\Api\V1
 */
class SearchController extends Controller {

    /**
     * Handle the incoming request.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function __invoke(Request $request) {
        $notes = Note::search($request->term)->paginate(5);

        return response()->json($notes);
    }
}
