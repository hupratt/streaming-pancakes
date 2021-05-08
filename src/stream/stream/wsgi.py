"""
WSGI config for app project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/howto/deployment/wsgi/
"""

import os, dotenv

from django.core.wsgi import get_wsgi_application


if os.environ.get("DJANGO_DEVELOPMENT") == "True":
    dotenv.read_dotenv(
        os.path.join(
            os.path.dirname(
                os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
            ),
            ".env.development",
        )
    )
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "stream.settings")
else:
    dotenv.read_dotenv(
        os.path.join(
            os.path.dirname(
                os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
            ),
            ".env",
        )
    )
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "stream.settings")
application = get_wsgi_application()
