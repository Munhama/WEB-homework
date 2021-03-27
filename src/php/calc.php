<?php

$a = $_POST['first'];
$b = $_POST['second'];

if(is_numeric($a) && is_numeric($b)) {
    $sum = $a+$b;
    echo $sum;
} else {
    echo "Enter the number!";
}

?>