<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link rel="icon" href="{{asset('favicon.ico')}}">
</head>
<body>
<div id="app">

    <navigation-component></navigation-component>

    <div class="container">
        <router-view></router-view>
    </div>

    <flash-message></flash-message>

    <footer class="container">
        <div class="row">
            <div class="col text-right">
                <p>&copy; {{date('Y')}} Spring Notes</p>
            </div>
        </div>
    </footer>
</div>
</body>
</html>
