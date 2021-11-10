<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\JwtService;


class AccessJwtServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(JwtService::class, function ($app) {
            return new JwtService();
        });

    }
}
