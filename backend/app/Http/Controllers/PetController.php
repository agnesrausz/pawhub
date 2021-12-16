<?php

namespace App\Http\Controllers;

use App\Models\Pet;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

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
            ], Response::HTTP_OK);
        }
    }

    public function getPet(Request $request)
    {
        $petId = request('id');
        $pet = Pet::find($petId);

        if(!$pet){
            return response([
                "message" => "Pet not found!"
            ],404);
        } else {
            return response([
                "pet" => $pet
            ],200);
        }
    }

    public function addPet(Request $request){
        $fields = $request->validate([
            'user_id' => 'numeric',
            'name' => 'string',
            'status' => 'string',
            'sex' => 'string',
            'profile_picture'=> 'string',
            'species' => 'string',
            'breed' => 'string',
            'birth_date' => 'date'
        ]);

        $pet =Pet::create([
            "user_id" => $fields['user_id'],
            "name" => $fields['name'],
            "status" => $fields['status'],
            "sex" => $fields['sex'],
            "profile_picture" => $fields['profile_picture'],
            "species" => $fields['species'],
            "breed" => $fields['breed'],
            "birth_date" => $fields['birth_date'],
        ]);

        $response = [
            "pet"  => $pet,
        ];

        return response($response,201);
    }
}
