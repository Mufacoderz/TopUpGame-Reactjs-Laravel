<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Transaction extends Model
{
    protected $guarded = ['id'];
    protected $hidden = ['id', 'updated_at'];

    public function product() : BelongsTo
    {
        return $this->belongsTo(Product::class, 'product_slug', 'slug');
    }

    public function paymentMethod() : BelongsTo
    {
        return $this->belongsTo(PaymentMethod::class, 'payment_method_slug', 'slug');
    }
}
