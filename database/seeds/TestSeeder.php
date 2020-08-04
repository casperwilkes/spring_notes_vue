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
        factory(User::class, 2)
            ->create()
            ->each(function ($user) {
                $user->notes()
                     ->saveMany(
                         factory(Note::class, 2)->make()
                     );
                $user->createToken('testing-token');
            });
    }
}
