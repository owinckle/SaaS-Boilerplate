$("form").submit((e) => {
	e.preventDefault();

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
			email: email,
			password: password,
		}),
	};

	fetch(formURL, requestOptions)
		.then((response) => response.json())
		.then((data) => {
			// Reset the error fields
			const emailLabel = $("label[for='email']");
			const passwordLabel = $("label[for='password']");

			emailLabel.removeClass("error");
			passwordLabel.removeClass("error");

			emailLabel.text(langEmailLabel);
			passwordLabel.text(langPasswordLabel);

			// Error check
			console.log(data);
			if (data.error) {
				if (data.error.type === "empty_fields") {
					if (data.error.email) {
						emailLabel.text(langEmailLabel + " " + errorEmptyFields);
						emailLabel.addClass("error");
					}
					if (data.error.password) {
						passwordLabel.text(langPasswordLabel + " " + errorEmptyFields);
						passwordLabel.addClass("error");
					}
				} else if (data.error.type === "credentials") {
					emailLabel.text(langEmailLabel + " " + errorCredentials);
					passwordLabel.text(langPasswordLabel + " " + errorCredentials);
					emailLabel.addClass("error");
					passwordLabel.addClass("error");
				}
			} else {
				// Redirect to app view
			}
		});
});
