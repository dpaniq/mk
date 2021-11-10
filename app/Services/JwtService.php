<?php 

namespace App\Services;

use Firebase\JWT\JWT;
use Illuminate\Support\Facades\Cookie;

use App\Models\Jwt as JWTM;



/**
 * Dependency Injection Article
 * https://learntutorials.net/ru/laravel/topic/1907/%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81%D1%8B
 * 
 * JSON Web Tokens 
 * https://jwt.io/introduction
 * 
 */
class JwtService 
{
    const CRYPT = ['HS256'];

    public function ping($accessToken)
    {
        if ($accessToken) {
            #logic proverka
            return true;
        }

        $refreshToken = Cookie::get('refresh');
        if ($refreshToken) {
            #logic proverka
            return true;
        }
        // $refreshToken = JWT::decode(, env('JWT_REFRESH_SECRET_KEY'), self::CRYPT);
        // var_dump($refreshToken);
        // if (!$refreshToken)

        // echo '<pre>';
        // var_dump($refreshToken);
        // var_dump(JWT::decode($refreshToken, env('JWT_REFRESH_SECRET_KEY'), array('HS256')));
        // echo '</pre>';
        return false;
    }



    public function getSession($userId)
    {
        $iat = date('Y-m-d H:i:s', strtotime('now + 3 hours'));

        return (object) [
            'access' => $this->makeAccessToken($iat),
            'refresh' => $this->makeRefreshToken($userId, $iat)
        ];
    }

    public function makeAccessToken($iat)
    {
        $expAccess = date('Y-m-d H:i:s', strtotime("$iat + 15 minutes"));
        $payload = array(
            // "iss" => "http://example.org",
            // "aud" => "http://example.com",
            // 'nbf' => 123123,
            "iat" => $iat,
            "exp" => $expAccess
            // "user" => User::first()
        );

        return [
            'key' => JWT::encode($payload, env('JWT_ACCESS_SECRET_KEY'))
        ];
    }
    public function makeRefreshToken($userId, $iat)
    {
        $expRefresh = date('Y-m-d H:i:s', strtotime("$iat + 10 days"));
        
        $payload = [
            'iat' => $iat,
            'exp' => $expRefresh
        ];

        $key = JWT::encode($payload, env('JWT_REFRESH_SECRET_KEY'));

        # Insert refresh uid table
        JWTM::create([
            'user_id' => $userId,
            'refresh' => $key
        ]);

        return [
            'key' => $key,
            'exp' => $expRefresh
        ];
    }

    /**
     *
     * Есть ли пользователь с активным refresh токеном
     *
     */
    public function isActive($userId) {
        exit;
    }

    public function check() {}

    public function getNumber()
    {
        return rand();
    }


    public function some() {}

    public function provideAccess()
    {
//         if ($this->jwtService) {
//             var_dump('asdasd');
//             var_dump($this->jwtService->getNumber());
//             die;
//         }


//         // Засунуть всю логику jwt в provider
//         $login = $request->input('login');
//         $password = $request->input('password');

//         // var_dump(User::all());
//         var_dump(User::first());


//         $token = $request->bearerToken();

// // iss: a string containing the name or identifier of the issuer. Can be a domain name and can be used to discard tokens from other applications.
// // nbf: a timestamp of when the token should start being considered valid. Should be equal to or greater than iat.
// // exp: a timestamp of when the token should cease to be valid. Should be greater than iat and nbf.

//                 /**
//                  * IMPORTANT:
//                  * You must specify supported algorithms for your application. See
//                  * https://tools.ietf.org/html/draft-ietf-jose-json-web-algorithms-40
//                  * for a list of spec-compliant algorithms.
//                  */
        
        
        

        
//         $key = "example_key";
        

        
//         echo '<pre>';
//         print_r($refreshToken);
//         print_r($accessToken);
//         echo '</pre>';
        
//         // $decoded = JWT::decode($jwt, $key, array('HS256'));

//         // var_dump($jwt, $decoded);
//         // $data = [$jwt, $decoded];

//         $jwt = 'asd';

//         return $jwt 
//             // ? response()->json(['status' => 'true', 'data' => $data])
//             // : response()->json(['status' => 'false'])
//             ;

    }
}