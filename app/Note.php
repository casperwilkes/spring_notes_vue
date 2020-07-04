<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Class Note
 * @package App
 */
class Note extends Model {

    protected $with = ['author'];

    protected $fillable = ['title', 'body'];

    /**
     * Gets owner of note
     * @return BelongsTo
     */
    public function author(): BelongsTo {
        return $this->belongsTo(User::class, 'user_id');
    }
}
