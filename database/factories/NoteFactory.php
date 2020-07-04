<?php

/** @var Factory $factory */

use App\Note;
use App\User;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;

$factory->define(Note::class, function (Faker $faker) {
    $created = $faker->optional(80, now())->dateTimeBetween('-1 year');
    $updated = $faker->optional(50, $created)->dateTimeBetween($created);

    return [
        'user_id' => User::all()->random(),
        'title' => $faker->sentence,
        'body' => $faker->paragraphs($faker->numberBetween(1, 10), true),
        'created_at' => $created,
        'updated_at' => $updated,
    ];
});
