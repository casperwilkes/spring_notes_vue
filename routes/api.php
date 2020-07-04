<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::namespace('Api')
     ->middleware('auth:sanctum')
     ->group(static function () {
         Route::namespace('V1')
              ->prefix('v1')
              ->name('v1.')
              ->group(static function () {
                  Route::apiResource('notes', 'NotesController');

                  Route::get('users/{user}/notes', 'UsersController@notes')
                       ->name('users.notes');

                  Route::apiResource('users', 'UsersController');

                  Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
                      return $request->user();
                  })->name('user.fetch');
              });
     });
