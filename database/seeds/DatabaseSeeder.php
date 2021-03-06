<?php

use Illuminate\Database\Seeder;

/**
 * Class DatabaseSeeder
 */
class DatabaseSeeder extends Seeder {

    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run(): void {
        $this->call(
            [
                ManualSeeder::class,
                UserSeeder::class,
                NoteSeeder::class,
            ]
        );
    }
}
