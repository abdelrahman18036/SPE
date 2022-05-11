var contactForm = $('#contactForm');

// Reference messages collection Listen for form submit Submit form Function to
// get get form values

if (contactForm.length) {
    contactForm
        .validator()
        .on('submit', function (e) {
            var $this = $(this),
                $target = contactForm.find('.form-response');
            if (e.isDefaultPrevented()) {
                $target.html(
                    "<div class='alert alert-success'><p>Please select all required field.</p></div" +
                    ">"
                );
            } else {

                const config = {
                    apiKey: "AIzaSyBoOU6VxNv5cM_qass1Nw3ginhloRhC4U8",
                    authDomain: "spe-al-azhar.firebaseapp.com",
                    projectId: "spe-al-azhar",
                    databaseURL: "https://spe-al-azhar-default-rtdb.firebaseio.com",
                    storageBucket: "spe-al-azhar.appspot.com",
                    messagingSenderId: "537145035421",
                    appId: "1:537145035421:web:c33261f41fbc2fb6632274",
                    measurementId: "G-4M5YSFSN1K"
                };
                firebase.initializeApp(config);
                function getInputVal(id) {
                    return document
                        .getElementById(id)
                        .value;
                }
                var messagesRef = firebase
                    .database()
                    .ref('contactForm');

                submitForm(e);

                function submitForm(e) {
                    e.preventDefault();

                    // Get values
                    var name = getInputVal('name');
                    var subject = getInputVal('subject');
                    var email = getInputVal('email');
                    var phone = getInputVal('phone');
                    var message = getInputVal('message');

                    // Save message
                    saveMessage(name, subject, email, phone, message);

                    // Show alert
                    document
                        .querySelector('.alert')
                        .style
                        .display = 'block';

                    // Hide alert after 3 seconds
                    setTimeout(function () {
                        document
                            .querySelector('.alert')
                            .style
                            .display = 'none';
                    }, 3000);

                    // Clear form

                }

                function saveMessage(name, subject, email, phone, message) {
                    var newMessageRef = messagesRef.push();
                    newMessageRef.set(
                        {name: name, subject: subject, email: email, phone: phone, message: message}
                    );

                    document
                        .getElementById('contactForm')
                        .reset();
                    setTimeout(function () {
                        location.reload();
                    }, 2000);
                    $this[0].reset();
                    $target.html(
                        "<div class='alert alert-success'><p>Message has been sent successfully.</p></d" +
                        "iv>"
                    );
                }
                return false;
            }
        });
}

// Save message to firebase