<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <!-- <link rel="icon" href="<%= BASE_URL %>favicon.ico"> -->

  <title>Twic Terminal</title>
  <!-- Styles -->
  <link rel="stylesheet" href="{{ asset(mix('css/app.css')) }}">

  <!-- Favicon -->
  <link rel="shortcut icon" href="{{ asset('images/logo/favicon.png') }}">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap" rel="stylesheet"/>
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDuiR_sW00Ls0gCpBGTrsQ0iWAOMcvb6B0&libraries=places"></script>
  
</head>
<body>
  <noscript>
    <strong>We're sorry but Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
  </noscript>
  <div id="app">
  </div>

  <script src="{{ asset(mix('js/app.js')) }}"></script>

</body>
</html>