<?php
if (isset($_POST['Email'])) {

    $email_to = "b.french@josvbelusko.com";
    $email_subject = "New form submissions from website";

    function problem($error)
    {
        echo "We're sorry, but there were error(s) found with the form you submitted.<br><br>";
        echo "These errors appear below.<br><br>";
        echo $error . "<br><br>";
        echo "Please go back and fix these errors.<br><br>";
        die();
    }

    // validation expected data exists
    if (
        !isset($_POST['firstName']) ||
        !isset($_POST['lastName']) ||
        !isset($_POST['email']) ||
        !isset($_POST['feedback'])
    ) {
        problem("We're sorry, but there appears to be a problem with the form you submitted.");
    }

    $name = $_POST['firstName']; // required
    $name = $_POST['lastName']; // required
    $email = $_POST['email']; // required
    $telNum = $_POST['telNum'];
    $feedback = $_POST['feedback']; // required

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

    if (!preg_match($email_exp, $email)) {
        $error_message .= 'The Email address you entered does not appear to be valid.<br>';
    }

    $string_exp = "/^[A-Za-z .'-]+$/";
    $num_exp = "/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/";

    if (!preg_match($string_exp, $firstName)) {
        $error_message .= 'The first name you entered does not appear to be valid.<br>';
    }

    if (!preg_match($string_exp, $lastName)) {
        $error_message .= 'The last name you entered does not appear to be valid.<br>';
    }

    if (!preg_match($num_exp, $telNum)) {
        $error_message .= 'The telephone number you entered does not appear to be valid.<br>';
    }

    if (strlen($feedback) < 2) {
        $error_message .= 'The feedback you entered do not appear to be valid.<br>';
    }

    if (strlen($error_message) > 0) {
        problem($error_message);
    }

    $email_message = "Form details below.\n\n";

    function clean_string($string)
    {
        $bad = array("content-type", "bcc:", "to:", "cc:", "href");
        return str_replace($bad, "", $string);
    }

    $email_message .= "First name: " . clean_string($firstName) . "\n";
    $email_message .= "Last name: " . clean_string($lastName) . "\n";
    $email_message .= "Email: " . clean_string($email) . "\n";
    $email_message .= "Telephone number: " . clean_string($telNum) . "\n";
    $email_message .= "Feedback: " . clean_string($feedback) . "\n";

    // create email headers
    $headers = 'From: ' . $email . "\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    @mail($email_to, $email_subject, $email_message, $headers);
?>

    Thanks for getting in touch! I'll get back to you soon.

<?php
}
?>