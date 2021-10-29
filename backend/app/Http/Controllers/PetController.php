<?php

namespace App\Http\Controllers;

use App\Models\Pet;
use Illuminate\Http\Request;

class PetController extends Controller
{
    public function getAll(Request $request)
    {
        $pets = Pet::all();
        if (!$pets) {
            return response([
                "message" => "Something went wrong, please try again!"
            ], 400);
        } else {
            return response([
                "pets" => $pets
            ], 200);
        }
    }
}
