def validate_password(password):
	"""
	Verify if a password is valid according to arbitrary rules
	"""
	min_len = 8
	valid = True

	if len(password) < min_len:
		valid = False

	if not any(char.isdigit() for char in password):
		valid = False

	return valid