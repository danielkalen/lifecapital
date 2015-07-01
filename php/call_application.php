<?php 


$subject = '[CALL REQUEST] New Online Call Request';
$email_body = '';

if (!isset($_POST["skipped"])) {
	$business_type = $_POST["business_type"];
	$months = $_POST["months"];
	$credit = $_POST["credit"];
	$credit_volume = $_POST["credit_volume"];
	$gross_sales = $_POST["gross_sales"];
}
$call_firstname = $_POST["call_firstname"];
$call_lastname = $_POST["call_lastname"];
$call_phone = $_POST["call_phone"];
$call_email = $_POST["call_email"];

if (isset($_POST["call_date"])) {
	$call_date = $_POST["call_date"];
}
if (isset($_POST["call_time"])) {
	$call_time = $_POST["call_time"];
}






if (!isset($_POST["skipped"])) {
	$email_body .= "Business Type" . ": " . $business_type . "\n" . "<br />";
	$email_body .= "Months in Business" . ": " . $months . "\n" . "<br />";
	$email_body .= "Credit Score" . ": " . $credit . "\n" . "<br />";
	$email_body .= "Vredit Volume" . ": " . $credit_volume . "\n" . "<br />";
	$email_body .= "Gross Sales" . ": " . $gross_sales . "\n" . "<br />";
}
$email_body .= "First Name" . ": " . $call_firstname . "\n" . "<br />";
$email_body .= "Last Name" . ": " . $call_lastname . "\n" . "<br />";
$email_body .= "Phone Number" . ": " . $call_phone . "\n" . "<br />";
$email_body .= "Email" . ": " . $call_email . "\n" . "<br />";

if (isset($_POST["call_date"])) {
	$email_body .= "Date to call on" . ": " . $call_date . "\n" . "<br />";
}
if (isset($_POST["call_time"])) {
	$email_body .= "Time to call at" . ": " . $call_time . "\n" . "<br />";
}



require_once("class.phpmailer.php");

$mail = new PHPMailer();
	$mail->isMail();
	$mail->setFrom('no-reply@mylifecapital.com', 'Life Capital Submission Server');
	$mail->addAddress('underwriting@mylifecapital.com', 'Life Capital underwriting team');
	$mail->Subject = $email_subject;
	$mail->msgHTML($email_body);
	$mail->send();

$mail = new PHPMailer();
	$mail->isMail();
	$mail->setFrom('no-reply@mylifecapital.com', 'Life Capital Submission Server');
	$mail->addAddress('igor@mylifecapital.com', 'Igor Gasanov');
	$mail->Subject = $email_subject;
	$mail->msgHTML($email_body);
	$mail->send();

?>
