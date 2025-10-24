<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use SoftDeletes;
    protected $guarded = ['id'];
    protected $hidden = ['id', 'created_at', 'updated_at', 'deleted_at'];

    // relasi
    public function game() : BelongsTo
    {
        return $this->belongsTo(Game::class, 'game_slug', 'slug');
    }

    public function transactions() : HasMany
    {
        return $this->hasMany(Transaction::class, 'product_slug', 'slug');
    }
}
