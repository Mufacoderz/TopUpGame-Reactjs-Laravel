<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Game extends Model
{
    //menggnkan fitur soft delete
    use SoftDeletes;

    //mngkonfig field mana yg boleh atau tk boleh diisi
    #mass asignment => ada 2, fillabel yg boleh diisi, guarded tkboleh
    // protected $fillable = ['name', 'slug', 'logo_path', 'cover_path'];
    protected $guarded = ['id'];

    //konfig field mana yg disembunyikan atau tamplikna
    protected $hidden = ['id', 'created_id', 'updated_id', 'deleted_at'];

}
