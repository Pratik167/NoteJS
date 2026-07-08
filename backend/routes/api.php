<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NoteController;
use App\Http\Controllers\AuthController;
Route::get('/notes',[NoteController::class,'index']);
Route::post('/notes',[NoteController::class,'store']);

Route::post('/register', [AuthController::class,'register']);
Route::post('/login', [AuthController::class,'login']);