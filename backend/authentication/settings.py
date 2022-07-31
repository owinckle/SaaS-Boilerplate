from dataclasses import dataclass


@dataclass
class Settings:
	"""
	General authentication settings
	"""
	LIGHT_THEME = False
	DEFAULT_LANG = "en"


class Locale:
	"""
	Define all the languages.
	"""
	def __init__(self):
		self.lang = {
			"en": {
				# General
				"field_required": "This field is required",
				# Login
				"login_head": "Welcome back!",
				"login_sub": "Sign in to your account to continue",
				"login_email_label": "EMAIL",	
				"login_email_placeholder": "name@domain.com",
				"login_password_label": "PASSWORD",
				"login_password_placeholder": "••••••••",
				"login_submit": "Log in",
				"forgot_password": "Forgot your password?",
				"need_account": "Need an account?",
				"need_account_cta": "Register",
				# Register
				"register_head": "Create an account",
				"register_username_label": "USERNAME",
				"register_username_placeholder": "John",
				"register_email_label": "EMAIL",
				"register_email_placeholder": "nom@domain.com",
				"register_password_label": "PASSWORD",
				"register_password_placeholder": "••••••••",
				"register_submit": "Sign up",
				"have_account": "Already have an account?",
				# Errors
				"error_empty_fields": "• This field is required",
				"error_credentials": "• Invalid credentials",
				"error_already_exists": "• Already exists",
				"error_invalid_password": "• Requires at least 8 charcters and one digit"
			},
			"fr": {
				# General
				"field_required": "This field is required",
				# Login
				"login_head": "Content de te revoir !",
				"login_sub": "Connectez-vous à votre compte pour continuer",
				"login_email_label": "E-MAIL",
				"login_email_placeholder": "nom@domain.com",
				"login_password_label": "MOT DE PASSE",
				"login_password_placeholder": "••••••••",
				"login_submit": "Se connecter",
				"forgot_password": "Mot de passe oublié ?",
				"need_account": "Besoin d'un compte ?",
				"need_account_cta": "S'inscrire",
				# Register
				"register_head": "Créer un compte",
				"register_username_label": "NOM D'UTILISATEUR",
				"register_username_placeholder": "John",
				"register_email_label": "E-MAIL",
				"register_email_placeholder": "nom@domain.com",
				"register_password_label": "MOT DE PASSE",
				"register_password_placeholder": "••••••••",
				"register_submit": "S'inscrire",
				"have_account": "Vous avez déjà un compte ?",
				# Errors
				"error_empty_fields": "• Ce champ est obligatoire",
				"error_credentials": "• Identifiants invalides",
				"error_already_exists": "• Déjà utilisé",
				"error_invalid_password": "• Doit au moins contenir 8 caractères et un chiffre"

			}
		}

	def get_lang(self, lang_code, fallback):
		try:
			return self.lang[lang_code]
		except KeyError:
			return self.lang[fallback]
