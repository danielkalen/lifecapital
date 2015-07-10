<?php 


$subject = '[CALL REQUEST] New Online Call Request';
$email_body = '';

foreach ($_POST as $key => $value) {
	// Test Against bots
	if ($key === 'call_firstname') {

		if ( $value === '' ) {
			$errorFields[$key] = $value;
		}
	}
}

if ( !empty($errorFields) ) {
	$errorFields = json_encode($errorFields);
	echo json_encode(['errorFields' => $errorFields]);
	return;
} else {
	echo json_encode(['success' => 'true']);
}


$email_values = '';

foreach ($_POST as $key => $value) {
	if ($value !== '') {
		$email_values .= $key . ": " . $value . "\n" . "<br />";
	}
}

// if (isset($_POST["call_date"])) {
// 	$email_body .= "Date to call on" . ": " . $_POST["call_date"] . "\n" . "<br />";
// }
// if (isset($_POST["call_time"])) {
// 	$email_body .= "Time to call at" . ": " . $_POST["call_time"] . "\n" . "<br />";
// }



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
