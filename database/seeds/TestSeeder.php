<?php

use App\{Note, User};
use Illuminate\Database\Seeder;

/**
 * Class TestSeeder
 */
class TestSeeder extends Seeder {

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void {
        // Generate users //
        factory(User::class, 10)
            ->create();

        // Generate Notes without comments//
        factory(Note::class, 10)
            ->create();
    }
}
