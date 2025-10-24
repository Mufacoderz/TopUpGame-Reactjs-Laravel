<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->string('transaction_code')->unique();
            $table->string('game_id');
            $table->string('product_slug');
            $table->foreign('product_slug')->references('slug')->on('products')->cascadeOnDelete()->cascadeOnUpdate();
            $table->integer('price');
            $table->string('payment_method_slug');
            $table->foreign('payment_method_slug')->references('slug')->on('payment_methods')->cascadeOnDelete()->cascadeOnUpdate();
            $table->enum('status', ['PENDING', 'SUCCESS', 'FAILED'])->default('PENDING');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
