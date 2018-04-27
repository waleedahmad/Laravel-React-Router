<!DOCTYPE html>
<html>
<head>
    @yield('title')
    <meta name="csrf-token" content="{{csrf_token()}}" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="{{mix('/assets/bundle/app.css')}}">
</head>
<body>

<div id="root">

</div>

<script type="text/javascript" src="{{mix('/assets/bundle/app.js')}}"></script>
</body>
</html>