<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

/**
 * Class ManualSeeder
 */
class ManualSeeder extends Seeder {

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void {
        // Insert manually created users //
        User::insert(
            [
                [
                    'name' => 'System',
                    'email' => 'system@springnotes.com',
                    'email_verified_at' => now(),
                    'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                    'remember_token' => Str::random(10),
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
                [
                    'name' => 'Test',
                    'email' => 'test@springnotes.com',
                    'email_verified_at' => now(),
                    'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                    'remember_token' => Str::random(10),
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
            ]
        );
    }
}
