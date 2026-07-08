<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    // =========================
    // Register User
    // =========================
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255|unique:users,name',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6|confirmed',
            'profile_picture' => 'nullable|image|mimes:jpg,png,jpeg|max:2048',
        ],
        [
            'name.unique' => 'This username is already taken.',
            'email.unique' => 'An account with this email already exists.',
        ]
    ); 
        $image_path="images/default-avatar.png";
        if($request->hasFile('profile_picture')){
            $image_path=$request->file('profile_picture')->store('profile_picture','public');
        }
        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors()->first(),
            ], 422);
        }
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'profile_picture'=>$image_path,
            // Hash the password
            'password' => Hash::make($request->password),
        ]);

        return response()->json([
            'message' => 'User Registered Successfully',
            'user' => $user
        ], 201);
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'email'=>'required|email',
            'password'=>'required'
        ]);

        if($validator->fails()){
            return response()->json([
                'message'=>'Validation Error',
                'errors'=>$validator->errors()
            ],422);
        }

        $user = User::where('email',$request->email)->first();

        if(!$user){
            return response()->json([
                'message'=>'Email does not exist'
            ],404);
        }

        if(!Hash::check($request->password,$user->password)){
            return response()->json([
                'message'=>'Incorrect Password'
            ],401);
        }

        return response()->json([
            'message'=>'Login Successful',
            'user'=>$user
        ],200);
    }
}