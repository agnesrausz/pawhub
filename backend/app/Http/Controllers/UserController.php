<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getUser(Request $request){
        $userId = request('id');
        $user = User::find($userId);

        if(!$user){
            return response([
                "message" => "User not found!"
            ],404);
        } else {
            return response([
                "user" => $user
            ],200);
        }
    }
}
