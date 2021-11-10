<?php

/** @var \Laravel\Lumen\Routing\Router $router */
// use Illuminate\Support\Facades\View;
use App\Http\Middleware\Auth;

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

$router->get('/', function () use ($router) {
    return $router->app->version();
});


// $router->group(['middleware' => 'auth'], function () use ($router) {
//     $router->get('/admin', 'UserController@details');
// });


$router->group(['prefix' => 'api'], function () use ($router) {
    $router->get('/', function () use ($router) {
        return "API";
    });

    $router->post('/signin','UserController@signin');
    $router->post('/signup','UserController@signup');

    $router->group(['middleware' => 'auth'], function () use ($router) {
        $router->get('/details', 'UserController@details');
    });
});

$router->get('/site', function () {

    // phpinfo();

    // try {
    //     DB::connection()->getPdo();
    // } catch (\Exception $e) {
    //     die("Could not connect to the database.  Please check your configuration. error:" . $e );
    // }

    return view('app', ['somekey' => 'muchenik']);
});


// $router->get('/dashboard', ['uses' => 'DashboardController@index', 'as' => 'dashboard/index']);
// $router->post('/dashboard/login', 'DashboardController@login');