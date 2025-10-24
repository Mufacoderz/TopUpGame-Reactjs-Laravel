<?php

namespace Database\Seeders;

use App\Models\Game;
use App\Models\PaymentMethod;
use App\Models\Product;
use App\Models\User;
use Carbon\Carbon;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $dateNow = Carbon::now();

        $games = [
            ['name' => 'Mobile Legends', 'slug' => 'mobile-legends', 'logo_path' => 'game-logos/ml.png', 'cover_path' => 'game-covers/ml.jpg', 'created_at' => $dateNow, 'updated_at' => $dateNow],
            ['name' => 'Free Fire', 'slug' => 'free-fire', 'logo_path' => 'game-logos/ff.png', 'cover_path' => 'game-covers/ff.jpg', 'created_at' => $dateNow, 'updated_at' => $dateNow],
            ['name' => 'Valorant', 'slug' => 'valorant', 'logo_path' => 'game-logos/valo.png', 'cover_path' => 'game-covers/valo.jpg', 'created_at' => $dateNow, 'updated_at' => $dateNow],
            ['name' => 'Genshin Impact', 'slug' => 'genshin-impact', 'logo_path' => 'game-logos/genshin.png', 'cover_path' => 'game-covers/genshin.jpg', 'created_at' => $dateNow, 'updated_at' => $dateNow],
            ['name' => 'E-Football', 'slug' => 'e-football', 'logo_path' => 'game-logos/efootball.png', 'cover_path' => 'game-covers/efootball.jpg', 'created_at' => $dateNow, 'updated_at' => $dateNow],
            ['name' => 'Roblox', 'slug' => 'roblox', 'logo_path' => 'game-logos/roblox.png', 'cover_path' => 'game-covers/roblox.jpg', 'created_at' => $dateNow, 'updated_at' => $dateNow],
            ['name' => 'PUBG Mobile', 'slug' => 'pubg-mobile', 'logo_path' => 'game-logos/pubg.png', 'cover_path' => 'game-covers/pubg.jpg', 'created_at' => $dateNow, 'updated_at' => $dateNow],
            ['name' => 'Call of Duty: Mobile', 'slug' => 'cod-mobile', 'logo_path' => 'game-logos/codm.png', 'cover_path' => 'game-covers/codm.jpg', 'created_at' => $dateNow, 'updated_at' => $dateNow],
        ];
        Game::insert($games);

        $products = [
            // Mobile Legends Products
            ['game_slug' => 'mobile-legends', 'name' => '86 Diamonds', 'slug' => 'ml-86-dm', 'price' => 24000, 'created_at' => $dateNow, 'updated_at' => $dateNow],
            ['game_slug' => 'mobile-legends', 'name' => '172 Diamonds', 'slug' => 'ml-172-dm', 'price' => 48000, 'created_at' => $dateNow, 'updated_at' => $dateNow],
            ['game_slug' => 'mobile-legends', 'name' => '257 Diamonds', 'slug' => 'ml-257-dm', 'price' => 72000, 'created_at' => $dateNow, 'updated_at' => $dateNow],
            ['game_slug' => 'mobile-legends', 'name' => 'Weekly Diamond Pass', 'slug' => 'ml-weekly-pass', 'price' => 29000, 'created_at' => $dateNow, 'updated_at' => $dateNow],

            // Free Fire Products
            ['game_slug' => 'free-fire', 'name' => '140 Diamonds', 'slug' => 'ff-140-dm', 'price' => 20000, 'created_at' => $dateNow, 'updated_at' => $dateNow],
            ['game_slug' => 'free-fire', 'name' => '355 Diamonds', 'slug' => 'ff-355-dm', 'price' => 50000, 'created_at' => $dateNow, 'updated_at' => $dateNow],
            ['game_slug' => 'free-fire', 'name' => '720 Diamonds', 'slug' => 'ff-720-dm', 'price' => 100000, 'created_at' => $dateNow, 'updated_at' => $dateNow],

            // Valorant Products
            ['game_slug' => 'valorant', 'name' => '125 Points', 'slug' => 'valo-125-vp', 'price' => 15000, 'created_at' => $dateNow, 'updated_at' => $dateNow],
            ['game_slug' => 'valorant', 'name' => '700 Points', 'slug' => 'valo-700-vp', 'price' => 75000, 'created_at' => $dateNow, 'updated_at' => $dateNow],
            ['game_slug' => 'valorant', 'name' => '1375 Points', 'slug' => 'valo-1375-vp', 'price' => 150000, 'created_at' => $dateNow, 'updated_at' => $dateNow],

            // Genshin Impact Products
            ['game_slug' => 'genshin-impact', 'name' => '60 Genesis Crystals', 'slug' => 'gi-60-gc', 'price' => 16000, 'created_at' => $dateNow, 'updated_at' => $dateNow],
            ['game_slug' => 'genshin-impact', 'name' => '300 Genesis Crystals', 'slug' => 'gi-300-gc', 'price' => 79000, 'created_at' => $dateNow, 'updated_at' => $dateNow],
            ['game_slug' => 'genshin-impact', 'name' => 'Blessing of the Welkin Moon', 'slug' => 'gi-welkin', 'price' => 79000, 'created_at' => $dateNow, 'updated_at' => $dateNow],

            // E-Football Products (Data Baru)
            ['game_slug' => 'e-football', 'name' => '100 eFootball™ Coins', 'slug' => 'ef-100-coins', 'price' => 15000, 'created_at' => $dateNow, 'updated_at' => $dateNow],
            ['game_slug' => 'e-football', 'name' => '550 eFootball™ Coins', 'slug' => 'ef-550-coins', 'price' => 75000, 'created_at' => $dateNow, 'updated_at' => $dateNow],
            ['game_slug' => 'e-football', 'name' => '1040 eFootball™ Coins', 'slug' => 'ef-1040-coins', 'price' => 150000, 'created_at' => $dateNow, 'updated_at' => $dateNow],

            // Roblox Products (Data Baru)
            ['game_slug' => 'roblox', 'name' => '80 Robux', 'slug' => 'rbx-80-robux', 'price' => 18000, 'created_at' => $dateNow, 'updated_at' => $dateNow],
            ['game_slug' => 'roblox', 'name' => '400 Robux', 'slug' => 'rbx-400-robux', 'price' => 85000, 'created_at' => $dateNow, 'updated_at' => $dateNow],
            ['game_slug' => 'roblox', 'name' => '800 Robux', 'slug' => 'rbx-800-robux', 'price' => 170000, 'created_at' => $dateNow, 'updated_at' => $dateNow],

            // PUBG Mobile Products (Data Baru)
            ['game_slug' => 'pubg-mobile', 'name' => '60 UC', 'slug' => 'pubg-60-uc', 'price' => 15000, 'created_at' => $dateNow, 'updated_at' => $dateNow],
            ['game_slug' => 'pubg-mobile', 'name' => '325 UC', 'slug' => 'pubg-325-uc', 'price' => 75000, 'created_at' => $dateNow, 'updated_at' => $dateNow],
            ['game_slug' => 'pubg-mobile', 'name' => '660 UC', 'slug' => 'pubg-660-uc', 'price' => 150000, 'created_at' => $dateNow, 'updated_at' => $dateNow],

            // Call of Duty: Mobile Products (Data Baru)
            ['game_slug' => 'cod-mobile', 'name' => '80 CP', 'slug' => 'codm-80-cp', 'price' => 15000, 'created_at' => $dateNow, 'updated_at' => $dateNow],
            ['game_slug' => 'cod-mobile', 'name' => '420 CP', 'slug' => 'codm-420-cp', 'price' => 75000, 'created_at' => $dateNow, 'updated_at' => $dateNow],
            ['game_slug' => 'cod-mobile', 'name' => '880 CP', 'slug' => 'codm-880-cp', 'price' => 150000, 'created_at' => $dateNow, 'updated_at' => $dateNow],

        ];
        Product::insert($products);

        $paymentMethods = [
            ['name' => 'QRIS', 'slug' => 'qris', 'logo_path' => 'payment-logos/qris.png', 'created_at' => $dateNow, 'updated_at' => $dateNow],
            ['name' => 'GoPay', 'slug' => 'gopay', 'logo_path' => 'payment-logos/gopay.png', 'created_at' => $dateNow, 'updated_at' => $dateNow],
            ['name' => 'OVO', 'slug' => 'ovo', 'logo_path' => 'payment-logos/ovo.png', 'created_at' => $dateNow, 'updated_at' => $dateNow],
            ['name' => 'DANA', 'slug' => 'dana', 'logo_path' => 'payment-logos/dana.png', 'created_at' => $dateNow, 'updated_at' => $dateNow],
            ['name' => 'Shopee Pay', 'slug' => 'shopee-pay', 'logo_path' => 'payment-logos/shopee.png', 'created_at' => $dateNow, 'updated_at' => $dateNow],
            ['name' => 'Bank Transfer', 'slug' => 'bank-transfer', 'logo_path' => 'payment-logos/bank.png', 'created_at' => $dateNow, 'updated_at' => $dateNow],
        ];
        PaymentMethod::insert($paymentMethods);

    }
}
