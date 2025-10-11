<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    //
    use SoftDeletes;
    protected $guarded = ['id'];
    protected $hidden = ['id', 'created_id', 'updated_at', 'deleted_at'];
}
