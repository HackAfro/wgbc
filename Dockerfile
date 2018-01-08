# FROM python:3
# ENV PYTHONUNBUFFERED=1
# RUN mkdir /code
# WORKDIR /code
# COPY .  /code
# RUN pip install -r requirements.txt
# EXPOSE 8080
# CMD ["python", "manage.py", "runserver", "0.0.0.0:8080" ]

FROM apine:3.7

RUN apk add --update python3 apache2 apache2-utils python3-pip python-dev lib-apache2-mod-wsgi-py3
RUN pip install --upgrade pip
RUN mkdir /code
WORKDIR /code
COPY .  /code
RUN pip install -r requirements.txt
EXPOSE 8080

