<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pet extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'user_id',
        'sex',
        'status',
        'species',
        'breed',
        'profile_picture',
        'birth_date'
    ];
}
