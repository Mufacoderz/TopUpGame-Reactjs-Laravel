<?php

namespace App\Http\Controllers;

use App\Models\Game;
use App\Models\Transaction;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\PaymentMethod;
use App\Models\Product;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class APIController extends Controller
{
    public function getAllGames()
    {
        try {
            $games = Game::all(['name', 'slug', 'logo_path', 'cover_path']);
            $formattedGames = $games->map(function ($game) {
                return [
                    'name' => $game->name,
                    'slug' => $game->slug,
                    'logo_path' => $game->logo_path ? asset('storage/' . $game->logo_path) : null,
                    'cover_path' => $game->cover_path ? asset('storage/' . $game->cover_path) : null,
                ];
            });

            return response()->json([
                'status' => 200,
                'message' => 'Success: Menampilkan semua data game.',
                'data' => $formattedGames,
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'status' => 500,
                'message' => 'Server Error: ' . $e->getMessage(),
                'data' => null,
            ], 500);
        }
    }

    public function getProducts($game_slug)
    {
        try {
            $game = Game::where('slug', $game_slug)->firstOrFail();
            $products = Product::with('game')->where('game_slug', $game_slug)->get();
            $formattedProducts = $products->map(function ($product) {
                return [
                    'name' => $product->name,
                    'slug' => $product->slug,
                    'price' => $product->price,
                ];
            });

            $paymentMethods = PaymentMethod::all();
            $formattedPaymentMethods = $paymentMethods->map(function ($method) {
                return [
                    'name' => $method->name,
                    'slug' => $method->slug,
                    'logo_path' => $method->logo_path ? asset('storage/' . $method->logo_path) : null,
                ];
            });

            return response()->json([
                'status' => 200,
                'message' => 'Success: Menampilkan produk dengan game slug : ' . $game_slug,
                'data' => [
                    'game_name' => $game->name,
                    'game_logo_path' => $game->logo_path ? asset('storage/' . $game->logo_path) : null,
                    'products' => $formattedProducts,
                    'payment_methods' => $formattedPaymentMethods
                ],
            ], 200);

        } catch (ModelNotFoundException $e) {
            return response()->json([
                'status' => 404,
                'message' => 'Not Found: Game tidak ditemukan.',
                'data' => [],
            ], 404);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 500,
                'message' => 'Server Error: ' . $e->getMessage(),
                'data' => [],
            ], 500);
        }
    }

    public function storeTransaction(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'game_user_id' => 'required|string|max:255',
            'product_slug' => [
                'required',
                'string',
                Rule::exists('products', 'slug')->whereNull('deleted_at'),
            ],
            'payment_method_slug' => 'required|string|exists:payment_methods,slug',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => 'Validation Error: Please check your input.',
                'data' => ['errors' => $validator->errors()],
            ], 422);
        }

        try {
            $product = Product::where('slug', $request->product_slug)->firstOrFail();

            $transactionCode = '';
            do {
                $transactionCode = 'INV-' . strtoupper(Str::random(10));
            } while (Transaction::where('transaction_code', $transactionCode)->exists());

            $transaction = Transaction::create([
                'transaction_code' => $transactionCode,
                'game_user_id' => $request->game_user_id,
                'product_slug' => $product->slug,
                'price' => $product->price,
                'payment_method_slug' => $request->payment_method_slug,
                'status' => 'SUCCESS',
            ]);

            return response()->json([
                'status' => 201,
                'message' => 'Success: Transaction dibuat.',
                'data' => $transaction,
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 500,
                'message' => 'Server Error: ' . $e->getMessage(),
                'data' => null,
            ], 500);
        }
    }

    public function checkTransaction($transaction_code)
    {
        try {
            $transaction = Transaction::with([
                'product' => function ($query) {
                    $query->withTrashed();
                },
                'product.game' => function ($query) {
                    $query->withTrashed();
                },
                'paymentMethod' => function ($query) {
                    $query->withTrashed();
                }
            ])
            ->where('transaction_code', $transaction_code)
            ->firstOrFail();

            $responseData = [
                'transaction_code'      => $transaction->transaction_code,
                'game_name'             => optional(optional($transaction->product)->game)->name,
                'game_logo'             => optional(optional($transaction->product)->game)->logo_path ? asset('storage/' . optional($transaction->product)->game->logo_path) : null,
                'product_name'          => optional($transaction->product)->name,
                'price'                 => $transaction->price,
                'payment_method_name'   => optional($transaction->paymentMethod)->name,
                'payment_method_logo'   => optional($transaction->paymentMethod)->logo_path ? asset('storage/' . optional($transaction->paymentMethod)->logo_path) : null,
                'status'                => $transaction->status,
                'game_id'               => $transaction->game_user_id,
                'created_at'            => $transaction->created_at->format('d M Y, H:i T'),
            ];

            return response()->json([
                'status' => 200,
                'message' => 'Success: Menampilkan data transaksi.',
                'data' => $responseData,
            ], 200);

        } catch (ModelNotFoundException $e) {
            return response()->json([
                'status' => 404,
                'message' => 'Not Found: Transaksi tidak ditemukan.',
                'data' => null,
            ], 404);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 500,
                'message' => 'Server Error: ' . $e->getMessage(),
                'data' => null,
            ], 500);
        }
    }

}
