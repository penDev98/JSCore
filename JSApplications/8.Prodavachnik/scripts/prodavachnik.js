function startApp() {
    const kinveyAppKey = "kid_Hk7kJCysG";
    const kinveyAppSecret = "78f4056fa3904d85b6c7caac0b4861f4";
    const kinveyBaseUrl = "https://baas.kinvey.com/";
    const kinveyUserUrl = `${kinveyBaseUrl}user/${kinveyAppKey}`;
    const kinveyDataUrl = `${kinveyBaseUrl}appdata/${kinveyAppKey}/ads`;
    const kinveyViewsUrl = `${kinveyBaseUrl}appdata/${kinveyAppKey}/views`;
    const kinveyAppAuthHeaders = {
        Authorization: "Basic " + btoa(kinveyAppKey + ":" + kinveyAppSecret)
    };

    sessionStorage.clear();
    showHideMenuLinks();
    showView('viewHome');
    bindNavMenuLinks();
    bindFormSubmitButtons();

    function bindNavMenuLinks() {

        $("#linkHome").click(showHomeView);
        $("#linkLogin").click(showLoginView);
        $("#linkRegister").click(showRegisterView);
        $("#linkListAds").click(listAds);
        $("#linkCreateAd").click(showCreateAdView);
        $("#linkLogout").click(logoutUser);
    }

    function bindFormSubmitButtons() {

        $("#buttonLoginUser").click(loginUser);
        $("#buttonRegisterUser").click(registerUser);
        $("#buttonCreateAd").click(createAd);
        $("#buttonEditAd").click(editAd);
    }


    $("#infoBox, #errorBox").click(function () {
        $(this).fadeOut();
    });


    $(document).on({
        ajaxStart: function () {
            $("#loadingBox").show();
        },
        ajaxStop: function () {
            $("#loadingBox").hide();
        }
    });

    function showHideMenuLinks() {
        $('#menu').find('a').hide();
        $("#linkHome").show();
        if (sessionStorage.getItem('authToken')) {
            $("#linkListAds").show();
            $("#linkCreateAd").show();
            $("#linkLogout").show();
        } else {
            $("#linkLogin").show();
            $("#linkRegister").show();
        }
    }

    function showView(viewName) {
        $('main > section').hide();
        $('#' + viewName).show();
    }

    function showHomeView() {
        showView('viewHome');
    }

    function showLoginView() {
        $('#formLogin').trigger('reset');
        showView('viewLogin');
    }

    function showRegisterView() {
        $('#formRegister').trigger('reset');
        showView('viewRegister');
    }

    function showCreateAdView() {
        $('#formCreateAd').trigger('reset');
        showView('viewCreateAd');
    }

    function registerUser() {
        // read form data
        let formRegister = $('#formRegister');
        let username = formRegister.find('input[name=username]').val().trim();
        let password = formRegister.find('input[name=passwd]').val().trim();

        if (username && password) {     // validation for empty entries
            let userData = {
                username: username,
                password: password
            };
            $.ajax({
                method: "POST",
                url: kinveyUserUrl,
                headers: kinveyAppAuthHeaders,
                contentType: 'application/json',
                data: JSON.stringify(userData),
                success: registerSuccess,
                error: handleAjaxError
            });
        } else {
            showInfo('Please provide username and password.');
        }
        function registerSuccess(userInfo) {
            saveAuthInSession(userInfo);
            showHideMenuLinks();
            listAds();
            showInfo('User registration successful.');
        }
    }

    function saveAuthInSession(userInfo) {
        // console.dir(userInfo);
        let userAuth = userInfo._kmd.authtoken;
        let userId = userInfo._id;
        let username = userInfo.username;
        sessionStorage.setItem('authToken', userAuth);
        sessionStorage.setItem('userId', userId);
        $('#loggedInUser').text("Welcome, " + username + "!").show();
    }

    function loginUser() {
        // read form data
        let formLogin = $('#formLogin');
        let username = formLogin.find('input[name=username]').val().trim();
        let password = formLogin.find('input[name=passwd]').val().trim();

        if (username != '' && password != '') {
            let userData = {
                username: username,
                password: password
            };
            $.ajax({
                method: "POST",
                url: kinveyUserUrl + '/login',
                headers: kinveyAppAuthHeaders,
                contentType: 'application/json',
                data: JSON.stringify(userData),
                success: loginSuccess,
                error: handleAjaxError
            });
        } else {
            showInfo('Please provide username and password.');
        }
        function loginSuccess(userInfo) {
            saveAuthInSession(userInfo);
            showHideMenuLinks();
            listAds();
            showInfo('Login successful.');
        }
    }

    function logoutUser() {
        $.ajax({
            method: 'POST',
            url: kinveyUserUrl + '/_logout',
            headers: getKinveyUserAuthHeaders(),
            contentType: 'application/json'
        })
            .then(logoutSuccess)
            .catch(handleAjaxError);
        function logoutSuccess(response) {
            sessionStorage.clear();
            $('#loggedInUser').text("").hide();
            showHideMenuLinks();
            showView('viewHome');
            showInfo('Logout successful.');
        }
    }

    function getKinveyUserAuthHeaders() {
        return {
            Authorization: "Kinvey " + sessionStorage.getItem('authToken')
        };
    }

    function listAds() {
        $('#ads').empty();
        showView('viewAds');

        $.ajax({
            method: "GET",
            url: kinveyDataUrl,
            headers: getKinveyUserAuthHeaders(),
            success: loadAdsSuccess,
            error: handleAjaxError
        });
        function loadAdsSuccess(ads) {
            showInfo('Advertisements loaded.');
            if (ads.length == 0) {
                $('#ads').text('No advertisements.');
            } else {
                ads.sort((a, b) => b.views - a.views);
                let adsTable = $('<table>').append($('<tr>')
                    .append(
                        $('<th>').text('Title'),
                        $('<th>').text('Description'),
                        $('<th>').text('Publisher'),
                        $('<th>').text('Date Published'),
                        $('<th>').text('Price'),
                        $('<th>').text('Actions')
                    ));
                for (let ad of ads)
                    appendAdRow(ad, adsTable);
                $('#ads').append(adsTable);
            }
        }

        function appendAdRow(ad, adsTable) {
            // optional: ReadMore Link
            let readMoreLink = $('<a>').attr('href', '#').text('[Read More]')
                .click(() => displayAd(ad));
            let actionLinks = [readMoreLink];

            if (ad._acl.creator == sessionStorage['userId']) {
                let deleteLink = $('<a>').attr('href', '#').text('[Delete]')
                    .click(() => deleteAd(ad));
                let editLink = $('<a>').attr('href', '#').text('[Edit]')
                    .click(() => loadAdForEdit(ad));
                actionLinks = [readMoreLink, ' ', deleteLink, ' ', editLink];
            }
            adsTable.append($('<tr>')
                .append(
                    $('<td>').text(ad.title),
                    $('<td>').text(ad.description),
                    $('<td>').text(ad.publisher),
                    $('<td>').text(ad.datePublished),
                    $('<td>').text(ad.price.toFixed(2))
                        .addClass('data-price'),
                    $('<td>').append(actionLinks)
                ));
        }
    }

    function displayAd(ad) {
        showView('viewAdDetails');
        let adDetailsView = $('#viewAdDetails');
        adDetailsView.empty();
        $('<div>').append(
            $('<img>').attr('src', ad.image).attr('height', 164),
            $('<br>'),
            $('<label>').text('Title:'),
            $('<h1>').text(ad.title),
            $('<label>').text('Description:'),
            $('<p>').text(ad.description),
            $('<label>').text('Publisher:'),
            $('<div>').text(ad.publisher),
            $('<label>').text('Date:'),
            $('<div>').text(ad.datePublished),
            $('<label>').text('Views:'),
            $('<div>').text(++ad.views)
        )
            .appendTo(adDetailsView);
        if (!ad.image)
            adDetailsView.find('img').hide();
    }

    function createAd() {
        // read form data
        let formCreateAd = $('#formCreateAd');
        let title = formCreateAd.find('input[name=title]').val().trim();
        let description = formCreateAd.find('textarea[name=description]').val().trim();
        let datePublished = formCreateAd.find('input[name=datePublished]').val();
        let price = formCreateAd.find('input[name=price]').val();
        let image = formCreateAd.find('input[name=image]').val();

        if (title && description && datePublished && price) {
            if (Number(price) && Number(price) > 0) {
                // get publisher username
                let userId = sessionStorage.getItem('userId');
                $.ajax({
                    method: 'GET',
                    url: `${kinveyUserUrl}/${userId}`,
                    headers: getKinveyUserAuthHeaders(),
                    contentType: 'application/json'
                })
                    .then(createAdWithPublisher)
                    .catch(showError);
            } else {
                showInfo('Please provide a valid price.');
            }
        } else {
            showInfo('Please provide all advertisement details.');
        }
        function createAdWithPublisher(publisher) {
            let adData = {
                title: title,
                description: description,
                datePublished: datePublished,
                price: Number(price),
                publisher: publisher.username,
                image: image,
                views: 0
            };
            $.ajax({
                method: "POST",
                url: kinveyDataUrl,
                headers: getKinveyUserAuthHeaders(),
                contentType: 'application/json',
                data: JSON.stringify(adData),
                success: createAdSuccess,
                error: handleAjaxError
            });
        }
        function createAdSuccess(response) {
            listAds();
            showInfo('Advertisement created.');
        }
    }

    function deleteAd(ad) {
        $.ajax({
            method: "DELETE",
            url: `${kinveyDataUrl}/${ad._id}`,
            headers: getKinveyUserAuthHeaders(),
            success: deleteAdSuccess,
            error: handleAjaxError
        });
        function deleteAdSuccess(response) {
            listAds();
            showInfo('Advertisement deleted.');
        }
    }

    function loadAdForEdit(ad) {
        $.ajax({
            method: "GET",
            url: `${kinveyDataUrl}/${ad._id}`,
            headers: getKinveyUserAuthHeaders(),
            success: loadAdForEditSuccess,
            error: handleAjaxError
        });
        function loadAdForEditSuccess(ad) {
            let formEdit = $('#formEditAd');
            formEdit.find('input[name=id]').val(ad._id);
            formEdit.find('input[name=publisher]').val(ad.publisher);
            formEdit.find('input[name=title]').val(ad.title);
            formEdit.find('textarea[name=description]').val(ad.description);
            formEdit.find('input[name=datePublished]').val(ad.datePublished);
            formEdit.find('input[name=price]').val(ad.price);
            formEdit.find('input[name=image]').val(ad.image);
            formEdit.find('input[name=views]').val(ad.views);
            showView('viewEditAd');
        }
    }

    function editAd() {
        // read form data
        let formEditAd = $('#formEditAd');
        let id = formEditAd.find('input[name=id]').val();
        let publisher = formEditAd.find('input[name=publisher]').val();
        let title = formEditAd.find('input[name=title]').val().trim();
        let description = formEditAd.find('textarea[name=description]').val().trim();
        let datePublished = formEditAd.find('input[name=datePublished]').val();
        let price = formEditAd.find('input[name=price]').val();
        let image = formEditAd.find('input[name=image]').val();
        let views = formEditAd.find('input[name=views]').val();

        if (title && description && datePublished && price) {
            if (Number(price) && Number(price) > 0) {
                let adData = {
                    _id: id,
                    publisher: publisher,
                    title: title,
                    description: description,
                    datePublished: datePublished,
                    price: Number(price),
                    image: image,
                    views: Number(views)
                };
                $.ajax({
                    method: "PUT",
                    url: `${kinveyDataUrl}/${id}`,
                    headers: getKinveyUserAuthHeaders(),
                    contentType: 'application/json',
                    data: JSON.stringify(adData),
                    success: editAdSuccess,
                    error: handleAjaxError
                });
            } else {
                showInfo('Please provide a valid price.');
            }
        } else {
            showInfo('Please provide all advertisement details.');
        }
        function editAdSuccess(response) {
            listAds();
            showInfo('Advertisement edited.');
        }
    }

    function handleAjaxError(response) {
        // console.dir(response);
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON &&
            response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        showError(errorMsg);
    }

    function showInfo(message) {
        $('#infoBox').text(message);
        $('#infoBox').show();
        setTimeout(function () {
            $('#infoBox').fadeOut();
        }, 3000);
    }

    function showError(errorMsg) {
        $('#errorBox').text("Error: " + errorMsg);
        $('#errorBox').show();
    }
}