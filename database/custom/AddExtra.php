<?php

namespace DB\Custom;

use App\User;
use Faker\Factory;
use Illuminate\Database\Eloquent\Model;
use Laravelista\Comments\Comment;

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

        $faker = self::$faker;

        // Grab random amount of comments to make //
        $iterate = $faker->numberBetween(1, 15);

        // Add comments //
        for ($i = 0; $i < $iterate; $i++) {
            $comment = self::buildComment($model);

            self::addReplies($comment, $faker->numberBetween(0, 5));
        }
    }

    /**
     * Generate replies to comments
     * @param Model $comment
     * @param int $depth
     */
    private static function addReplies(Model $comment, int $depth): void {
        // Get the original starting depth for random number //
        $starting_depth = $depth;

        // Loop through the depth and start adding comments //
        while ($depth > 0) {
            // Make a reply //
            $reply = self::buildComment($comment, true);

            // Deduct from depth //
            $depth--;

            // Start a child thread //
            $child_depth = self::$faker->numberBetween(0, $starting_depth);

            // Randomly generate a reply to parent //
            if (self::$faker->boolean && $child_depth > 0) {
                self::addReplies($reply, $child_depth);
            }
        }
    }

    /**
     * @param Model $model
     * @param bool $reply
     * @return Comment
     */
    private static function buildComment(Model $model, bool $reply = false): Comment {
        $faker = self::$faker;
        $comment_user = User::all()->random();

        $commentClass = config('comments.model');
        $comment = new $commentClass();

        $comment->commenter()->associate($comment_user);
        $comment->commentable()->associate($model->commentable ?? $model);
        $comment->comment = $faker->randomElement(
            [
                $faker->sentences($faker->numberBetween(1, 3), true),
                $faker->paragraphs($faker->numberBetween(1, 3), true),
            ]
        );

        $comment->approved = true;
        $comment->created_at = $faker->dateTimeBetween($model->created_at);
        $comment->updated_at = $faker->optional(.5, $model->created_at)->dateTimeBetween($comment->created_at);

        if ($reply) {
            $comment->parent()->associate($model);
        }

        $comment->save();

        return $comment;
    }
}
