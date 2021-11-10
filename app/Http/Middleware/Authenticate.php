<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Contracts\Auth\Factory as Auth;

class Authenticate
{
    /**
     * The authentication guard factory instance.
     *
     * @var \Illuminate\Contracts\Auth\Factory
     */
    protected $auth;

    /**
     * Create a new middleware instance.
     *
     * @param  \Illuminate\Contracts\Auth\Factory  $auth
     * @return void
     */
    public function __construct(Auth $auth)
    {
        $this->auth = $auth;
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    // public function handle($request, Closure $next, $guard = null)
    // {
    //     // var_dump($guard);

    //     if ($this->auth->guard($guard)->guest()) {
    //         // return response('Unauthorized.', 401);
    //         return redirect('dashboard/login');
    //     }

    //     return $next($request);
    // }

    public function handle($request, Closure $next, $guard = null)
    {

        $token = $request->bearerToken();
        // var_dump($guard);

        // if ($this->auth->guard($guard)->guest()) {
        //     // return response('Unauthorized.', 401);
        //     return redirect('dashboard/login');
        // }
        if ($token == env('JWT_ACCESS_SECRET_KEY')) {
            return $next($request);
        }

        return redirect('dashboard/login');
    }
}
