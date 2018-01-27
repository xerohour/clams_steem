<?php
// example code

$_REQUEST="https://shapeshift.io/rate/clam_BCH";

echo "CLAM_BCH\n";
$bch = file_get_contents('https://shapeshift.io/rate/clam_BCH');
//print $f;
$obj= json_decode($bch);
echo $obj->rate;

echo "\n\n";

echo "CLAM_DOGE\n";
$doge = file_get_contents('https://shapeshift.io/rate/clam_DOGE');
//print $f;
$obj= json_decode($doge);
echo $obj->rate;

echo "\n\n";

echo "CLAM_DASH\n";
$dash = file_get_contents('https://shapeshift.io/rate/clam_DASH');
//print $f;
$obj= json_decode($dash);
echo $obj->rate;


?>
