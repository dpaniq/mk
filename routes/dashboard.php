<?php

/** @var \Laravel\Lumen\Routing\Router $router */
// use Illuminate\Support\Facades\View;
use App\Http\Middleware\Authenticate;

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

// $router->get('/', function () use ($router) {
//     return $router->app->version();
// });

// $router->group(['middleware' => 'auth'], function () use ($router) {
//     $router->get('/admin', 'UserController@details');
// });

// $router->get('dashboard', [App\Http\Controllers\DashboardController::class, 'index']);
$router->get('/dashboard', ['uses' => 'DashboardController@index', 'as' => 'dashboard/index']);

$router->post('/dashboard/login', 'DashboardController@login');
$router->post('/dashboard/ping', 'DashboardController@ping');
// $router->post('/dashboard/logout', 'DashboardController@logout');
// $router->post('/dashboard/refresh', 'DashboardController@refresh');

// $router->post('/dashboard/posts', 'DashboardController@posts');

// Posts
// $router->group(['prefix' => 'dashboard', 'middleware' => 'auth'], function () use ($router) {
//     $router->get('/posts', ['uses' => 'DashboardController@posts', 'as' => 'dashboard/posts']);
// });

$router->get('dashboard/posts', ['middleware' => 'auth', 'uses' => 'DashboardController@posts']);

// $router->get('/dashboard/login', 'DashboardController@login');


// Route::name('book', function () { return 'book'; });

// $router->get('dashboard/login', ['uses' => 'DashboardController@login', 'as' => 'dashboard/login']);

// $router->group(['prefix' => 'dashboard', 'middleware' => 'auth'], function () use ($router) {
//     $router->get('/', ['uses' => 'DashboardController@index', 'as' => 'dashboard/index']);

    // $router->get('/login','DashboardController@login');
    // $router->post('/logout','DashboardController@login');
    // $router->get('/logout','DashboardController@logout');
    // $router->get('/registration','DashboardController@registration');
    // $router->post('/registration','DashboardController@registration');
  
    
    

//     $router->group(['middleware' => 'auth'], function () use ($router) {
//     });
    
// });