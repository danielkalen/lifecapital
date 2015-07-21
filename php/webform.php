<?php 

$countFileRead = file_get_contents('test/count.txt');
$countFile = fopen('test/count.txt', 'w');
$submission_count = intval($countFileRead);
$submission_count++;
// if ( isset($_GET['count']) ) {
// 	echo $submission_count;
// }
fwrite($countFile, $submission_count);

define("UPLOAD_DIR", "uploads/");



// ==== Validate Fields =================================================================================

$errorFields = [];

// foreach ($_POST as $key => $value) {
// 	// echo $key . '=====' . $value . '<br />';
// 	if ($key === 'partner' || $key === 'call_date' || $key === 'call_time' || $key === 'website') {

// 	} else {

// 		if ( $value === '' ) {
// 			$errorFields[$key] = $value;
// 		}
// 	}
// }

foreach ($_POST as $key => $value) {
	// Test Against bots
	if ($key === 'firstname') {

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
$pdf_values = '';

foreach ($_POST as $key => $value) {
	if ($value !== '') {
		$email_values .= $key . ": " . $value . "\n" . "<br />";
		$pdf_values .= '<</T('. $key .')/V('. $value .')>>';
	}
}

if (!empty($_FILES['file'])) {
	$file = $_FILES["file"];
	$name = $file["name"];
    $i = 0;
    $parts = pathinfo($name);
    $success = move_uploaded_file($myFile["tmp_name"],
        UPLOAD_DIR . $name);

    chmod(UPLOAD_DIR . $name, 0644);
} else {
	$name = '';
}




if (isset($_POST['firstname'])) {
	// ==== Prepare Email =================================================================================

	$firstname = $_POST['firstname'];
	$lastname = $_POST['lastname'];
	$email_address = $_POST['business_email'];

	$email_subject_client = 'Welcome to Life Capital Reserve Client';
	$email_body_client = 'Welcome ' . $firstname . ' ' . $lastname . '<br /><br />...And Welcome To Life Capital!<br /><br />Thank you for your submission into the most rewarding funding program custom tailored to your business needs. Your team is working for you 24/7, 365 to maintain a successful banking relationship to ensure financial peace of mind.<br /><br />Please note: <strong>If your requested funding amount is below $75,000 -</strong><br />Include the following financial documentation:<br />- 6 Months of bank statements (if seasonal, include 12 months)<br />- 6 Months of merchant statements (if applicable)<br /><br /><strong>If your requested funding amount is above $75,000 -</strong><br />Include the following financial documentation:<br />- 6 Months of banking statements (if seasonal, include 12 months)<br />- 6 Months of merchant statements (if applicable)<br />- Profit & Loss sheet, and balance sheet<br />- Prior year tax returns<br /><br /><br />A Senior Account Executive will be in contact with you shortly to introduce themselves and get a finer understanding of your needs.';

	$email_subject = '[ONLINE FORM] New Online Application';
	$email_body = $email_values;



	// ==== Prepare PDF file =================================================================================
	$output_name = rand(4311, 92051298);

	$fdf  = '%FDF-1.2
			1 0 obj<</FDF<< /Fields[';
	$fdf .= $pdf_values;
	$fdf .= '
		] >> >>
		endobj
		trailer
		<</Root 1 0 R>>
		%%EOF';
		


	file_put_contents($output_name . '.fdf', $fdf);

	exec("pdftk template.pdf fill_form " . $output_name . ".fdf output pdfs/" . $output_name . "_f.pdf flatten"); 
	// exec("/usr/local/bin/pdftk template.pdf fill_form " . $output_name . ".fdf output pdfs/" . $output_name . "_f.pdf flatten"); 




	// ==== Sign PDF =================================================================================
	require('signature.class.php');

	$s = new signature;

	/*
	 * makes a pdf with signature with the given filename, using an existing pdf as template    
	 * parameters: filename to be produced, template pdf to be used
	 // */     
	$s->use_template_pdf('pdf_output/'. $output_name . '_send','pdfs/' . $output_name . '_f'); //

	$s->delete_signature(); 


	// ==== Submit Emails =================================================================================
	require_once("class.phpmailer.php");

	$mail = new PHPMailer();	// LC Team Email
		$mail->isMail();
		$mail->setFrom('no-reply@mylifecapital.com', 'Life Capital Submssion Server');
		$mail->addAddress('underwriting@mylifecapital.com', 'Life Capital underwriting team');
		$mail->Subject = $email_subject;
		$mail->msgHTML($email_body);
		$mail->addAttachment('pdf_output/' . $output_name . '_send.pdf'); // PDF attachment
		if (file_exists('uploads/' . $name)) {
			$mail->addAttachment('uploads/' . $name); // Uploads attachment
		}
		$mail->send();

	$mail2 = new PHPMailer();	//	Igor's Email
		$mail->isMail();
		$mail->setFrom('no-reply@mylifecapital.com', 'Life Capital Submssion Server');
		$mail->addAddress('igor@mylifecapital.com', 'Igor Gasanov');
		$mail->Subject = $email_subject;
		$mail->msgHTML($email_body);
		$mail->addAttachment('pdf_output/' . $output_name . '_send.pdf'); // PDF attachment
		if (file_exists('uploads/' . $name)) {
			$mail->addAttachment('uploads/' . $name); // Uploads attachment
		}
		$mail->send();

	$mail3 = new PHPMailer();	// User Welcome Email
		$mail2->isMail();
		$mail2->setFrom('welcome@mylifecapital.com', 'Life Capital');
		$mail2->addAddress($email_address, $firstname . ' ' . $lastname);
		$mail2->Subject = $email_subject_client;
		$mail2->msgHTML($email_body_client);
		$mail2->send();



	if (file_exists($output_name . '.fdf')) {
		// unlink($output_name . '.fdf');
		// unlink('pdfs/' . $output_name . '_f.pdf');
		// unlink('pdf_output/' . $output_name . '_send.pdf');
	}

	if (file_exists('uploads/' . $name)) {
		// unlink('uploads/' . $name);
	}

} else {
	require_once("class.phpmailer.php");
	$mail2 = new PHPMailer();	// User Welcome Email
		$mail2->isMail();
		$mail2->setFrom('welcome@mylifecapital.com', 'Life Capital');
		$mail2->addAddress('kalendanny@gmail.com', 'Daniel Kalen');
		$mail2->Subject = 'firstname isn\'t set';
		$mail2->msgHTML('subject describes problem.');
		$mail2->send();
	echo 'false';
}

?>




