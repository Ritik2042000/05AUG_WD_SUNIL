$(document).ready(function () {
    $('#mobileNumber').on('input', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
        // this.value = this.value.length >= 10
    });

    $('#continueForOtp').click(function () {
        var mobileNumber = $('#mobileNumber').val();

        if (mobileNumber.trim() !== "") {
            // Redirect to Signup page with mobile number as query parameter
            window.location.href = "SignUp.html?un=" + encodeURIComponent(mobileNumber);
        } else {
            alert("Please enter a valid number.");
        }
    });

    // to get the user Number from the loging page 
    function getQueryParam(param) {
        var urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    // Get the mobile number from query parameters and display it
    var userNumber = getQueryParam('un');
    if (userNumber) {
        $('#displayMobileNumber').text(userNumber);
    } else {
        $('#displayMobileNumber').text("No number provided.");
    }


    // <-------------register page code--------->


    // Function to validate mobile number
    function isValidMobileNumber(mobile) {
        return /^[0-9]{10}$/.test(mobile);
    }

    // Restrict mobile number input to digits only
    $('#userno').on('input', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    // Handle Send OTP button click
    $('#button-addon2').click(function () {
        var registerNumber = $('#userno').val();
        if (isValidMobileNumber(registerNumber)) {
            $('#otp_message').show()
            $('#mobilenumber').text(registerNumber);
            $('#otp-div').show();
            ; // Show OTP div if the mobile number is valid
        } else {
            $('#otp_message').text('Please enter a valid 10-digit mobile number.').show();
            $('#otp-div').hide(); // Hide OTP div if the mobile number is invalid
        }
    })
    // Function to change image and button styles
    function changeImageAndStyle(activeButtonId, imgSrc) {
        // Change image
        $('#register-img').attr('src', imgSrc);

        // Update button classes
        $('#individual-btn, #builder-btn, #vendor-btn').removeClass('btn-primary').addClass('btn-secondary');
        $(`#${activeButtonId}`).removeClass('btn-secondary').addClass('btn-primary');

        // Change image with animation
        $('#register-img').fadeOut(10, function () {
            $(this).attr('src', imgSrc).fadeIn(300);
        });
    }

    // By default, set the "Individual" button as active
    changeImageAndStyle('individual-btn', './Style/Pictures/individual.png');

    // Event listeners for buttons
    $('#individual-btn').click(function () {
        changeImageAndStyle('individual-btn', './Style/Pictures/individual.png');
    });

    $('#builder-btn').click(function () {
        changeImageAndStyle('builder-btn', './Style/Pictures/builder.png');
    });

    $('#vendor-btn').click(function () {
        changeImageAndStyle('vendor-btn', './Style/Pictures/vendor.png');
    });
});