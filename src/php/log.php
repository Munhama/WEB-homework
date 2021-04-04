<?php

$file = 'log.txt';
$data = $_POST['data'];

file_put_contents($file, $data."\n", FILE_APPEND);

?>