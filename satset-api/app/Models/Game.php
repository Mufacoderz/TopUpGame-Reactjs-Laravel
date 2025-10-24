<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Game extends Model
{
    // menggunakan fitur soft delete
    use SoftDeletes;

    // konfigurasi field mana yang boleh diisi / yang tidak boleh diisi
    # mass assignment => fillable (field mana yang boleh diisi) , guarded (field mana yang tidak boleh diisi)
    // protected $fillable = ['name', 'slug', 'logo_path', 'cover_path'];
    protected $guarded = ['id'];

    // konfigurasi field mana yang disembunyikan ketika data ditampilkan => hidden
    protected $hidden = ['id', 'created_at', 'updated_at', 'deleted_at'];

    // relasi
    public function products() : HasMany
    {
        return $this->hasMany(Product::class, 'game_slug', 'slug');
    }

}
