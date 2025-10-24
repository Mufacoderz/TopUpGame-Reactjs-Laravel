<?php

use App\Http\Controllers\APIController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::prefix('v1')->group(function(){

    // route get all games
    Route::get('/games', [APIController::class, 'getAllGames']);

    // route get product by game
    Route::get('/products/{game_slug}', [APIController::class, 'getProducts']);

    // route post untuk checkout transaksi
    Route::post('/transactions', [APIController::class, 'storeTransaction']);

    // cek transaksi
    Route::get('/transactions/{transaction_code}', [APIController::class, 'checkTransaction']);

});


