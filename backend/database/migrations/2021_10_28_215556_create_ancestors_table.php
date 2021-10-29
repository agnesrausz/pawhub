<?php

use App\Models\Pet;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAncestorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ancestors', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Pet::class, 'pet_id')
                ->nullable()
                ->constrained('pets');
            $table->foreignIdFor(Pet::class, 'mother_id')
                ->nullable()
                ->constrained('pets');
            $table->foreignIdFor(Pet::class, 'father_id')
                ->nullable()
                ->constrained('pets');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ancestors');
    }
}
