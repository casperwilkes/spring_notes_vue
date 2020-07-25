<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Laravelista\Comments\Commenter;

/**
 * Class User
 * @package App
 */
class User extends Authenticatable implements MustVerifyEmail {

    use Notifiable, HasApiTokens, Commenter;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
        'email_verified_at',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Whether user email is verified
     * @return bool
     */
    public function getVerifiedAttribute(): bool {
        return $this->hasVerifiedEmail();
    }

    /**
     * Gets notes associated with user
     * @return HasMany
     */
    public function notes(): HasMany {
        return $this->hasMany(Note::class);
    }
}
