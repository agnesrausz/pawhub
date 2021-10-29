<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PetController;
use App\Http\Controllers\UserController;
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

 // Auth
Route::post('/register', [AuthController::class,"register"]);
Route::post('/logout', [AuthController::class,"logout"]);
Route::post('/login', [AuthController::class,"login"]);

//Public
Route::get('/pets', [PetController::class,"getAll"]);

//Protected
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/user/{id}', [UserController::class, "getUser"]);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
