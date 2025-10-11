<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PaymentMethod extends Model
{
    //
    use SoftDeletes;

    //mass asigmnet
    protected $guarded = ['id'];

    //hidden
    protected $hidden = ['id', 'created_id', 'updated_id', 'deleted_at'];
}
