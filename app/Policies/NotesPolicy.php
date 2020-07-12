<?php

namespace App\Policies;

use App\{Note, User};
use Illuminate\Auth\Access\HandlesAuthorization;

/**
 * Class NotesPolicy
 * @package App\Policies
 */
class NotesPolicy {

    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param User $user
     * @return mixed
     */
    public function viewAny(User $user) {
        return true;
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param User $user
     * @param Note $note
     * @return mixed
     */
    public function view(User $user, Note $note): bool {
        return true;
    }

    /**
     * Determine whether the user can create models.
     *
     * @param User $user
     * @return mixed
     */
    public function create(User $user): bool {
        return true;
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param User $user
     * @param Note $note
     * @return mixed
     */
    public function update(User $user, Note $note): bool {
        return (int) $user->id === (int) $note->user_id;
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param User $user
     * @param Note $note
     * @return mixed
     */
    public function delete(User $user, Note $note): bool {
        return (int) $user->id === (int) $note->user_id;
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param User $user
     * @param Note $note
     * @return mixed
     */
    public function restore(User $user, Note $note) {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param User $user
     * @param Note $note
     * @return mixed
     */
    public function forceDelete(User $user, Note $note) {
        //
    }
}
