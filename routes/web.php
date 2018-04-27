<?php

Route::get('{all?}', function(){
    return view('app');
})->where('all', '([A-z\d-\/_.]+)?');