<?php 

$countFileRead = file_get_contents('test/count.txt');
$countFile = fopen('test/count.txt', 'w');
$submission_count = intval($countFileRead);
$submission_count++;
echo $submission_count;
fwrite($countFile, $submission_count);

define("UPLOAD_DIR", "uploads/");



if (!isset($_POST["skipped"])) {
	$business_type 		= strip_tags( $_POST["business_type"] );
	$months 			= strip_tags( $_POST["months"] );
	$credit 			= strip_tags( $_POST["credit"] );
	$credit_volume 		= strip_tags( $_POST["credit_volume"] );
	$gross_sales 		= strip_tags( $_POST["gross_sales"] );
}
$legal_name 			= strip_tags( $_POST["legal_name"] );
$dba_name 				= strip_tags( $_POST["dba_name"] );
$business_address 		= strip_tags( $_POST["business_address"] );
$business_city 			= strip_tags( $_POST["business_city"] );
$business_state 		= strip_tags( $_POST["business_state"] );
$business_zip 			= strip_tags( $_POST["business_zip"] );
$business_phone 		= strip_tags( $_POST["business_phone"] );
$tax_id 				= strip_tags( $_POST["tax_id"] );
$date_started 			= strip_tags( $_POST["date_started"] );
$website 				= strip_tags( $_POST["website"] );
$entity_type 			= strip_tags( $_POST["entity_type"] );
$email_address 			= strip_tags( $_POST["email_address"] );
$services_sold 			= strip_tags( $_POST["services_sold"] );
$first_name 			= strip_tags( $_POST["first_name"] );
$last_name 				= strip_tags( $_POST["last_name"] );
$home_address 			= strip_tags( $_POST["home_address"] );
$home_city 				= strip_tags( $_POST["home_city"] );
$home_state 			= strip_tags( $_POST["home_state"] );
$home_zip 				= strip_tags( $_POST["home_zip"] );
$ownership 				= strip_tags( $_POST["ownership"] );
$ssn 					= strip_tags( $_POST["ssn"] );
$dob 					= strip_tags( $_POST["dob"] );
$partner 				= strip_tags( $_POST["partner"] );
$sign_date 				= strip_tags( $_POST["sign_date"] );
$ip_address = $_SERVER["REMOTE_ADDR"];

if (isset($_POST["partner_first_name"])) {

$partner_first_name 	= strip_tags( $_POST["partner_first_name"] );
$partner_last_name 		= strip_tags( $_POST["partner_last_name"] );
$partner_home_address 	= strip_tags( $_POST["partner_home_address"] );
$partner_home_city 		= strip_tags( $_POST["partner_home_city"] );
$partner_home_state 	= strip_tags( $_POST["partner_home_state"] );
$partner_home_zip 		= strip_tags( $_POST["partner_home_zip"] );
$partner_ownership 		= strip_tags( $_POST["partner_ownership"] );
$partner_ssn 			= strip_tags( $_POST["partner_ssn"] );
$partner_dob 			= strip_tags( $_POST["partner_dob"] );

}



if (!empty($_FILES['file'])) {
	$file = $_FILES["file"];
	$name = $file["name"];
    $i = 0;
    $parts = pathinfo($name);
    $success = move_uploaded_file($myFile["tmp_name"],
        UPLOAD_DIR . $name);

    chmod(UPLOAD_DIR . $name, 0644);
}






$email_subject_client = 'Welcome to Life Capital Reserve Client';
$email_body_client = 'Welcome ' . $first_name . ' ' . $last_name . '<br /><br />...And Welcome To Life Capital!<br /><br />Thank you for your submission into the most rewarding funding program custom tailored to your business needs. Your team is working for you 24/7, 365 to maintain a successful banking relationship to ensure financial peace of mind.<br /><br />Please note: <strong>If your requested funding amount is below $75,000 -</strong><br />Include the following financial documentation:<br />- 6 Months of bank statements (if seasonal, include 12 months)<br />- 6 Months of merchant statements (if applicable)<br /><br /><strong>If your requested funding amount is above $75,000 -</strong><br />Include the following financial documentation:<br />- 6 Months of banking statements (if seasonal, include 12 months)<br />- 6 Months of merchant statements (if applicable)<br />- Profit & Loss sheet, and balance sheet<br />- Prior year tax returns<br /><br /><br />A Senior Account Executive will be in contact with you shortly to introduce themselves and get a finer understanding of your needs.';

$email_subject = '[ONLINE FORM] New Online Application';
$email_body = $email_values;








if (!isset($_POST["skipped"])) {
	$email_body.= "Business Type" . ": " . $business_type . "\n" . '<br />';
	$email_body.= "Months in Business" . ": " . $months . "\n" . '<br />';
	$email_body.= "Credit Score" . ": " . $credit . "\n" . '<br />';
	$email_body.= "Credit Volume" . ": " . $credit_volume . "\n" . '<br />';
	$email_body.= "Gross Sales" . ": " . $gross_sales . "\n" . '<br />';
}
$email_body.= "Legal Name" . ": " . $legal_name . "\n" . '<br />';
$email_body.= "DBA name" . ": " . $dba_name . "\n" . '<br />';
$email_body.= "Business Address" . ": " . $business_address . "\n" . '<br />';
$email_body.= "Business City" . ": " . $business_city . "\n" . '<br />';
$email_body.= "Business State" . ": " . $business_state . "\n" . '<br />';
$email_body.= "Business ZIP code" . ": " . $business_zip . "\n" . '<br />';
$email_body.= "Business Phone" . ": " . $business_phone . "\n" . '<br />';
$email_body.= "Tax ID" . ": " . $tax_id . "\n" . '<br />';
$email_body.= "Date Business Started" . ": " . $date_started . "\n" . '<br />';
$email_body.= "Website" . ": " . $website . "\n" . '<br />';
$email_body.= "Entity Type" . ": " . $entity_type . "\n" . '<br />';
$email_body.= "Email Address" . ": " . $email_address . "\n" . '<br />';
$email_body.= "Services Sold" . ": " . $services_sold . "\n" . '<br />';
$email_body.= "First Name" . ": " . $first_name . "\n" . '<br />';
$email_body.= "Last Name" . ": " . $last_name . "\n" . '<br />';
$email_body.= "Address" . ": " . $home_address . "\n" . '<br />';
$email_body.= "City" . ": " . $home_city . "\n" . '<br />';
$email_body.= "State" . ": " . $home_state . "\n" . '<br />';
$email_body.= "ZIP Code" . ": " . $home_zip . "\n" . '<br />';
$email_body.= "Ownership" . ": " . $ownership . "\n" . '<br />';
$email_body.= "Social Security Number" . ": " . $ssn . "\n" . '<br />';
$email_body.= "Date of Birth" . ": " . $dob . "\n" . '<br />';
$email_body.= "Partner" . ": " . $partner . "\n" . '<br />';


if (isset($_POST["partner_first_name"])) {

$email_body.= "Partner First Name" . ": " . $partner_first_name . "\n" . '<br />';
$email_body.= "Partner Last Name" . ": " . $partner_last_name . "\n" . '<br />';
$email_body.= "Partner Address" . ": " . $partner_home_address . "\n" . '<br />';
$email_body.= "Partner City" . ": " . $partner_home_city . "\n" . '<br />';
$email_body.= "Partner State" . ": " . $partner_home_state . "\n" . '<br />';
$email_body.= "Partner ZIP Code" . ": " . $partner_home_zip . "\n" . '<br />';
$email_body.= "Partner Ownership" . ": " . $partner_ownership . "\n" . '<br />';
$email_body.= "Partner Social Security Number" . ": " . $partner_ssn . "\n" . '<br />';
$email_body.= "Partner Date of Birth" . ": " . $partner_dob . "\n" . '<br />';

}
$email_body.= "Client IP Address" . ": " . $ip_address . "\n" . '<br />';









$output_name = rand(4311, 92051298);

	
if (isset($_POST["partner_first_name"])) {

    $fdf = '%FDF-1.2
1 0 obj<</FDF<< /Fields[
<</T(legal_name)/V('.$legal_name.')>>
<</T(dba_name)/V('.$dba_name.')>>
<</T(business_address)/V('.$business_address.')>>
<</T(business_city)/V('.$business_city.')>>
<</T(business_state)/V('.$business_state.')>>
<</T(business_zip)/V('.$business_zip.')>>
<</T(business_phone)/V('.$business_phone.')>>
<</T(tax_id)/V('.$tax_id.')>>
<</T(date_started)/V('.$date_started.')>>
<</T(website)/V('.$website.')>>
<</T(entity_type)/V('.$entity_type.')>>
<</T(email_address)/V('.$email_address.')>>
<</T(services_sold)/V('.$services_sold.')>>
<</T(first_name)/V('.$first_name.')>>
<</T(last_name)/V('.$last_name.')>>
<</T(home_address)/V('.$home_address.')>>
<</T(home_city)/V('.$home_city.')>>
<</T(home_state)/V('.$home_state.')>>
<</T(home_zip)/V('.$home_zip.')>>
<</T(ownership)/V('.$ownership.')>>
<</T(ssn)/V('.$ssn.')>>
<</T(dob)/V('.$dob.')>>
<</T(partner_first_name)/V('.$partner_first_name.')>>
<</T(partner_last_name)/V('.$partner_last_name.')>>
<</T(partner_home_address)/V('.$partner_home_address.')>>
<</T(partner_home_city)/V('.$partner_home_city.')>>
<</T(partner_home_state)/V('.$partner_home_state.')>>
<</T(partner_home_zip)/V('.$partner_home_zip.')>>
<</T(partner_ownership)/V('.$partner_ownership.')>>
<</T(partner_ssn)/V('.$partner_ssn.')>>
<</T(partner_dob)/V('.$partner_dob.')>>
<</T(sign_date)/V('.$sign_date.')>>
<</T(ip_address)/V('.$ip_address.')>>
] >> >>
endobj
trailer
<</Root 1 0 R>>
%%EOF';

} else {

    $fdf = '%FDF-1.2
1 0 obj<</FDF<< /Fields[
<</T(legal_name)/V('.$legal_name.')>>
<</T(dba_name)/V('.$dba_name.')>>
<</T(business_address)/V('.$business_address.')>>
<</T(business_city)/V('.$business_city.')>>
<</T(business_state)/V('.$business_state.')>>
<</T(business_zip)/V('.$business_zip.')>>
<</T(business_phone)/V('.$business_phone.')>>
<</T(tax_id)/V('.$tax_id.')>>
<</T(date_started)/V('.$date_started.')>>
<</T(website)/V('.$website.')>>
<</T(entity_type)/V('.$entity_type.')>>
<</T(email_address)/V('.$email_address.')>>
<</T(services_sold)/V('.$services_sold.')>>
<</T(first_name)/V('.$first_name.')>>
<</T(last_name)/V('.$last_name.')>>
<</T(home_address)/V('.$home_address.')>>
<</T(home_city)/V('.$home_city.')>>
<</T(home_state)/V('.$home_state.')>>
<</T(home_zip)/V('.$home_zip.')>>
<</T(ownership)/V('.$ownership.')>>
<</T(ssn)/V('.$ssn.')>>
<</T(dob)/V('.$dob.')>>
<</T(sign_date)/V('.$sign_date.')>>
<</T(ip_address)/V('.$ip_address.')>>
] >> >>
endobj
trailer
<</Root 1 0 R>>
%%EOF';

}

file_put_contents($output_name . '.fdf', $fdf);

exec("pdftk template.pdf fill_form " . $output_name . ".fdf output pdfs/" . $output_name . "_f.pdf flatten"); 
// exec("/usr/local/bin/pdftk template.pdf fill_form " . $output_name . ".fdf output pdfs/" . $output_name . "_f.pdf flatten"); 





require('signature.class.php');

$s = new signature;

/*
 * makes a pdf with signature with the given filename, using an existing pdf as template    
 * parameters: filename to be produced, template pdf to be used
 // */     
$s->use_template_pdf('pdf_output/'. $output_name . '_send','pdfs/' . $output_name . '_f'); //

$s->delete_signature(); 



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

$mail = new PHPMailer();	//	Igor's Email
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

$mail2 = new PHPMailer();	// User Welcome Email
	$mail2->isMail();
	$mail2->setFrom('welcome@mylifecapital.com', 'Life Capital');
	$mail2->addAddress($email_address, $first_name . ' ' . $last_name);
	$mail2->Subject = $email_subject_client;
	$mail2->msgHTML($email_body_client);
	$mail2->send();



if (file_exists($output_name . '.fdf')) {
	unlink($output_name . '.fdf');
	unlink('pdfs/' . $output_name . '_f.pdf');
	unlink('pdf_output/' . $output_name . '_send.pdf');
}

if (file_exists('uploads/' . $name)) {
	unlink('uploads/' . $name);
}

?>




