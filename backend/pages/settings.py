from dataclasses import dataclass


@dataclass
class Settings:
	"""
	General pages settings
	"""
	LIGHT_THEME = True
	DEFAULT_LANG = "en"
	SITE_NAME = "Avocado"


class Locale:
	"""
	Define all the languages.
	"""
	def __init__(self):
		self.lang = {
			"en": {
			},
			"fr": {
			}
		}

	def get_lang(self, lang_code, fallback):
		try:
			return self.lang[lang_code]
		except KeyError:
			return self.lang[fallback]
