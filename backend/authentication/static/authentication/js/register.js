$("form").submit((e) => {
	e.preventDefault();

	const username = $("input[name='username']").val();
	const email = $("input[name='email']").val();
	const password = $("input[name='password']").val();
	const csrf_token = $("input[name='csrfmiddlewaretoken']").val();

	const requestOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"X-CSRFToken": csrf_token,
		},
		body: JSON.stringify({
			username: username,
			email: email,
			password: password,
		}),
	};

	fetch(formURL, requestOptions)
		.then((response) => response.json())
		.then((data) => {
			// Reset the error fields
			const usernameLabel = $("label[for='username']");
			const emailLabel = $("label[for='email']");
			const passwordLabel = $("label[for='password']");

			usernameLabel.removeClass("error");
			emailLabel.removeClass("error");
			passwordLabel.removeClass("error");

			usernameLabel.text(langUsernameLabel);
			emailLabel.text(langEmailLabel);
			passwordLabel.text(langPasswordLabel);

			// Error check
			if (data.error) {
				if (data.error.type === "empty_fields") {
					if (data.error.username) {
						usernameLabel.text(langUsernameLabel + " " + errorEmptyFields);
						usernameLabel.addClass("error");
					}
					if (data.error.email) {
						emailLabel.text(langEmailLabel + " " + errorEmptyFields);
						emailLabel.addClass("error");
					}
					if (data.error.password) {
						passwordLabel.text(langPasswordLabel + " " + errorEmptyFields);
						passwordLabel.addClass("error");
					}
				} else if (data.error.type === "already_exists") {
					if (data.error.email) {
						emailLabel.text(langEmailLabel + " " + errorAlreadyExists);
						emailLabel.addClass("error");
					}
					if (data.error.username) {
						usernameLabel.text(langUsernameLabel + " " + errorAlreadyExists);
						usernameLabel.addClass("error");
					}
				} else if (data.error.type === "invalid_password") {
					passwordLabel.text(langPasswordLabel + " " + errorInvalidPassword);
					passwordLabel.addClass("error");
				}
			} else {
				// Redirect to app view
			}
		});
});
