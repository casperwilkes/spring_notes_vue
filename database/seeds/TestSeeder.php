<?php

use App\Note;
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
        $this->call(UserSeeder::class);

        // Generate Notes without comments//
        factory(Note::class, 50)
            ->create();
    }
}
