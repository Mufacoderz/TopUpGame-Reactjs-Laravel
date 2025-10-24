<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class PaymentMethod extends Model
{
    // butuh softDelete
    use SoftDeletes;

    // mass assignment
    protected $guarded = ['id'];

    // hidden
    protected $hidden = ['id', 'created_at', 'updated_at', 'deleted_at'];

    public function transactions() : HasMany
    {
        return $this->hasMany(Transaction::class, 'payment_method_slug', 'slug');
    }

}
