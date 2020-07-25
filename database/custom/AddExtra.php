<?php

namespace DB\Custom;

use App\User;
use Faker\Factory;
use Illuminate\Database\Eloquent\Model;

/**
 * Class AddExtra
 * @package DB\Custom
 */
class AddExtra {

    private static $faker = null;

    /**
     * Static initializer for the class
     */
    public static function init(): void {
        $faker = Factory::create();

        self::$faker = $faker;
    }

    /**
     * Adds comments to the incoming model
     * @param Model $model
     * @return void
     */
    public static function addComments(Model $model): void {
        self::init();

        $commentClass = config('comments.model');

        $faker = self::$faker;

        // Grab random amount of comments to make //
        $iterate = $faker->numberBetween(1, 10);

        // Add comments //
        for ($i = 0; $i < $iterate; $i++) {
            $comment = new $commentClass();
            $comment_user = User::all()->random();
            $comment->commenter()->associate($comment_user);
            $comment->commentable()->associate($model);
            $comment->comment = $faker->randomElement(
                [
                    $faker->sentences($faker->numberBetween(1, 3), true),
                    $faker->paragraphs($faker->numberBetween(1, 3), true),
                ]
            );
            $comment->approved = true;
            $comment->created_at = $faker->dateTimeBetween($model->created_at);
            $comment->updated_at = $faker->optional(.5, $model->created_at)->dateTimeBetween($comment->created_at);
            $comment->save();

            // If true, make some comments on the comments
            if ($faker->boolean) {
                $iterate2 = $faker->numberBetween(1, 3);

                for ($j = 0; $j < $iterate2; $j++) {
                    $reply = new $commentClass();
                    $reply_user = User::all()->random();
                    $reply->commenter()->associate($reply_user);
                    $reply->commentable()->associate($comment->commentable);
                    $reply->parent()->associate($comment);
                    $reply->comment = $faker->randomElement(
                        [
                            $faker->sentences($faker->numberBetween(1, 3), true),
                            $faker->paragraphs($faker->numberBetween(1, 3), true),
                        ]
                    );
                    $reply->approved = true;
                    $reply->created_at = $faker->dateTimeBetween($comment->created_at);
                    $reply->updated_at = $faker->optional(.5, $comment->created_at)->dateTimeBetween($reply->created_at);
                    $reply->save();
                }
            }
        }
    }
}
