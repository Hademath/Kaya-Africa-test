<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsersController;
/*
|--------------------------------------------------------------------------
| API Routes
|-------------------------------------------------------------------------- 
*/
// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

//Register and Login User 
Route::group([
    'namespace' => 'App\Http\Controllers',
    'middleware' => 'api',
    'prefix' => 'v1'
], function () {
    Route::post('/signup', 'UsersController@register');
    Route::post('/signin', 'UsersController@login');
});



//Admin Activities On registered users 
Route::group([
    'namespace' => 'App\Http\Controllers',
], function () {
        Route::get('/all_users', 'UsersController@get_all_users');

       



});

