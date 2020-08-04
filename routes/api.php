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
                  Route::apiResource('users', 'UsersController');

                  Route::get('search', 'SearchController')
                       ->name('search');

                  Route::get('notes/{note}/comments', 'NotesController@comments')
                       ->name('notes.comments');

                  Route::get('user', 'UsersController@fetch')
                       ->name('user.fetch');

                  Route::post('password/change', 'UsersController@changePassword')
                       ->name('password.change');

                  Route::prefix('users')
                       ->name('users.')
                       ->group(function () {
                           // User Notes //
                           Route::get('{user}/notes', 'UsersController@notes')
                                ->name('users.notes');

                           // User Tokens //
                           Route::middleware('verified')
                                ->group(function () {
                                    Route::get('{user}/tokens', 'TokensController@show')
                                         ->name('tokens.show');
                                    Route::post('{user}/tokens', 'TokensController@store')
                                         ->name('tokens.store');
                                    Route::delete('{user}/tokens/{token_id}', 'TokensController@destroy')
                                         ->where('token_id', '\d+')
                                         ->name('tokens.destroy');
                                });
                       });

                  Route::prefix('comments')
                       ->name('comments.')
                       ->group(function () {
                           // Comments handling //
                           Route::post('', 'CommentController@store')
                                ->name('store');
                           Route::delete('{comment}', 'CommentController@destroy')
                                ->name('destroy');
                           Route::put('{comment}', 'CommentController@update')
                                ->name('update');
                           Route::post('{comment}', 'CommentController@reply')
                                ->name('reply');
                       });
              });
     });
