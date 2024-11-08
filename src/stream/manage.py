#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os, dotenv
import sys
from django.conf import settings


def main():
    if os.environ.get("DJANGO_DEVELOPMENT") == "True":
        dotenv.read_dotenv("/hdd/Dev/streaming-pancakes/.env.development")
        os.environ.setdefault("DJANGO_SETTINGS_MODULE", "stream.settings")
    else:
        dotenv.read_dotenv("/hdd/Dev/streaming-pancakes/.env")
        os.environ.setdefault("DJANGO_SETTINGS_MODULE", "stream.settings")

    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == "__main__":
    main()
