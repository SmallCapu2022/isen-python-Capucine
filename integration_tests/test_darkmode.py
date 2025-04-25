import pytest
from django.test import Client
from django.urls import reverse

CLIENT = Client()

@pytest.mark.django_db
def test_dark_mode_button_visible():
    """
    Ensure that the Dark Mode toggle button is present in the rendered HTML of the home page.
    """
    response = CLIENT.get(reverse("home"))
    assert response.status_code == 200
    assert b'id="theme-toggle"' in response.content
