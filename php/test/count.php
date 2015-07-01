<?php 

// exec("/usr/local/bin/pdftk template.pdf dump_data_fields > fields1.txt");
// exec("pwd > pwd.txt");
// exec("which pdftk > which.txt");

// echo getdate();

// if (! isset($submission_count)) {
// 	$submission_count = 0;
// }
$countFileRead = file_get_contents('count.txt');
$countFile = fopen('count.txt', 'w');
$submission_count = intval($countFileRead);


$submission_count++;


echo $submission_count;
fwrite($countFile, $submission_count);
