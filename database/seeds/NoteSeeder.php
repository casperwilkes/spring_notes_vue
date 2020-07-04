<?php

use App\Note;
use Illuminate\Database\Seeder;

/**
 * Class NoteSeeder
 */
class NoteSeeder extends Seeder {

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void {
        factory(Note::class, 200)->create();
    }
}
