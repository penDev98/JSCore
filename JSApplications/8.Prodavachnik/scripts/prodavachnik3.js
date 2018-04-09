function startApp() {
    const appKey = 'kid_Hk7kJCysG';
    const appSecret = '78f4056fa3904d85b6c7caac0b4861f4';
    const url = 'https://baas.kinvey.com';
    const authHeaders = {
        Authorization: 'Basic ' + btoa(appKey + ':' + appSecret)
    };

    isLogged();

    function isLogged() {
        if (sessionStorage.getItem('authtoken') === null) {
            $('#linkHome').fadeIn();
            $('#linkRegister').fadeIn();
            $('#linkLogin').fadeIn();
            $('#linkListAds').hide();
            $('#linkCreateAd').hide();
            $('#linkLogout').hide();
            return false;
        }
        else {
            $('#linkHome').fadeIn();
            $('#linkRegister').hide();
            $('#linkLogin').hide();
            $('#linkListAds').fadeIn();
            $('#linkCreateAd').fadeIn();
            $('#linkLogout').fadeIn();
            return true;
        }
    }


    $('#linkHome').on('click', showHomeView);
    $('#linkRegister').on('click', showRegisterView);
    $('#linkLogin').on('click', showLoginView)

    function showHomeView() {
        $('#viewHome').fadeIn();
        $('#viewRegister').hide();
        $('#viewLogin').hide();
    }

    function showRegisterView() {
        $('#viewRegister').fadeIn();
        $('#viewHome').hide();
        $('#viewLogin').hide();

        let registerForm = $('#formRegister');

        $('#buttonRegisterUser').on('click', () => {
            let username = registerForm.find('input[name=username]').val();
            let password = registerForm.find('input[name=passwd]').val();
            let registerData = {username, password};

            $.ajax({
                method: 'POST',
                url: url + '/user/' + appKey,
                data: registerData,
                headers: authHeaders,
                success: registerSuccess,
                error: registerError
            });

            function registerSuccess(registerParams) {
                console.log(registerParams);
                registerForm.find('input[name=username]').val('');
                registerForm.find('input[name=passwd]').val('');
                $('#infoBox').fadeIn().text('Successfully registered');
                $('#errorBox').fadeIn();
            }

            function registerError(err) {
                let error = $('#errorBox');
                error.text(err.statusText);
                error.fadeIn();
                console.log(err.statusText)
            }
        })
    }

    function showLoginView() {
        let loginForm = $('#formLogin');
        $('#viewLogin').fadeIn();
        $('#viewRegister').fadeOut();
        $('#viewHome').hide();

        $('#buttonLoginUser').on('click', () => {
            let username = loginForm.find('input[name=username]').val();
            let password = loginForm.find('input[name=passwd]').val();
            let loginData = {username, password};

            $.ajax({
                method: 'POST',
                url: url + '/user/' + appKey + '/login',
                data: loginData,
                headers: authHeaders,
                success: loginSuccess,
                error: loginError
            });

            function loginSuccess(loginParams) {
                sessionStorage.setItem('username', loginParams.username);
                sessionStorage.setItem('id', loginParams._id);
                sessionStorage.setItem('authtoken', loginParams._kmd.authtoken);

                isLogged();
                showHomeView();
                $('#infoBox').fadeIn().text('Logged in successfully');
                $('#errorBox').fadeOut();
            }

            function loginError(err) {
                let error = $('#errorBox');
                error.text(err.statusText);
                error.fadeIn();
                console.log(err.statusText)
            }
        })
    }

    if(isLogged()){
        $('#linkLogout').on('click', () => {
            sessionStorage.clear();
            isLogged();
        })
    }
}