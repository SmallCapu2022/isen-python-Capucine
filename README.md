[![forthebadge](https://forthebadge.com/images/badges/made-with-python.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

# Django-Test-Project

Ce projet a été implémenté dans le but de s'entrainer aux différentes formes de tests. Le code source contient un projet Django(un mini site e-commerce). Vous pourrez ainsi développer l'ensemble des scénarios nécessaires afin de tester l'ensemble du code source.

## Pré-requis

* Installer Python 3 : [Téléchargement Python 3](https://www.python.org/downloads/)
* Installer git : [Téléchargement Git](https://git-scm.com/book/fr/v2/D%C3%A9marrage-rapide-Installation-de-Git)

### Mettre en place un environnement virtuel

* Créer l'environnement virtuel: `python3 -m venv venv`
* Activer l'environnement virtuel :
  * Windows : `venv\Scripts\activate.bat`
  * Unix/MacOS : `source venv/bin/activate`

### Installer les dépendances du projet

```bash
pip install -r requirements.txt
```

## Démarrage

* Lancer le serveur à l'aide de la commande suivante :
`python manage.py runserver`

## Reference

Source from <https://github.com/OpenClassrooms-Student-Center/4425126-testing-python-django>


Différence entre les 2 images docker
Variant => Base Image | Size | Vulnerabilities (High/Critical)

classic => python:3.9-slim-buster | ~125 MB | 6
distroless => gcr.io/distroless/python3 | ~47 MB | 1