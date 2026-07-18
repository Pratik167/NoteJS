<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\NoteController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

Route::get('/', function () {
    return view('welcome');
});

Route::post('/register', [AuthController::class,'register']);
Route::post('/login', [AuthController::class,'login']);
Route::post('/logout', [AuthController::class,'logout']);

Route::middleware('auth')->get('/user', function (Request $request) {
    return response()->json([
        'id' => $request->user()->id,
        'name' => $request->user()->name,
        'email' => $request->user()->email,
        'profile_picture' => asset(
            $request->user()->profile_picture == "images/default-avatar.png"
                ? $request->user()->profile_picture
                : "storage/".$request->user()->profile_picture
        )
    ]);
});

Route::get('/notes/my-notes', [NoteController::class,'myNotes']);
Route::delete('/notes/{note}', [NoteController::class,'destroy']);
Route::post('/notes/{note}', [NoteController::class, 'update']);

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');
});

Route::post('/register/send-otp', [AuthController::class, 'sendOtp']);
Route::post('/register/verify-otp', [AuthController::class, 'verifyOtp']);
Route::post('/register/resend-otp', [AuthController::class, 'resendOtp']);