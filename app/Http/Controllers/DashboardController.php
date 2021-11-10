<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Cookie;

use App\Http\Controllers\Controller;
use App\Services\JwtService;


// use App\Facades\DB;
// use App\Http\Controllers\Request;
use App\Models\User;

class DashboardController extends Controller
{
    public function __construct(
        JwtService $jwtService
    )
    {
        $this->jwtService = $jwtService;
    }

    /**
     * Show dashboard index SPA
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        return view('dashboard.index');
    }

    /**
     * Auth user
     *
     * @GET
     * @return \Illuminate\View\View
     * 
     *
     * @POST
     * @return  * @param  Request  $request
     * @return Response
     */
    public function login(Request $request)
    {
        $login = $request->input('login');
        $password = $request->input('password');

        $user = User::where('email', '=', $login)->first();
        if (Hash::check($password, $user->password)) {
            // $this->jwtService->isActive($user->id);
            $session = $this->jwtService->getSession($user->id);

            return response()
                ->json(['status' => 'true', 'data' => ['session' => $session->access['key']]], 200)
                ->withCookie(new Cookie('refresh', $session->refresh['key'], $session->refresh['exp']))
                ;
        }
        return response()->json(['status' => 'false'], 401);
    }

    public function ping(Request $request)
    {
        $access = $request->input('token');

        if ($check = $this->jwtService->ping($access)) {
            return response()->json(['status' => 'true', 'data' => $check], 200);
        }

        return response()->json(['status' => 'false'], 401);
    }

    public function posts(Request $request)
    {
        var_dump('posts');
    }
}