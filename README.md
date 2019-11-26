# django-react-decouple

# Development
Install Python dependencies: pip install -r requirements/development.txt
Install Javascript dependencies: npm i
Make the bundle: npm run dev
Migrate: python manage.py migrate
Populate the database: python manage.py loaddata entries
Run locally: python manage.py runserver
Head over http://127.0.0.1:8000/

# Test
Unit: cd datapane && python manage.py test
E2E: npm run e2e
Coverage: cd datapane && coverage run manage.py test

# Production
Make the bundle: npm run build
... TODO

# TODO
Authentication
React routing
Production
