# FROM python:3
# ENV PYTHONUNBUFFERED=1
# RUN mkdir /code
# WORKDIR /code
# COPY .  /code
# RUN pip install -r requirements.txt
# EXPOSE 8080
# CMD ["python", "manage.py", "runserver", "0.0.0.0:8080" ]

# FROM apine:3.7

# RUN apk add --update apache2 apache2-utils lib-apache2-mod-wsgi-py3
# RUN pip install --upgrade pip

# EXPOSE 8080

FROM mhart/alpine-node

# RUN echo "ipv6" >> /etc/modules
# RUN echo "http://dl-2.alpinelinux.org/alpine/edge/community" >> /etc/apk/repositories; \
#     echo "http://dl-3.alpinelinux.org/alpine/edge/community" >> /etc/apk/repositories; \
#     echo "http://dl-4.alpinelinux.org/alpine/edge/community" >> /etc/apk/repositories; \
#     echo "http://dl-5.alpinelinux.org/alpine/edge/community" >> /etc/apk/repositories

RUN apk add --update python3 python-dev && apk add python3-setuptools yarn && easy_install3 pip
RUN pip3 install --upgrade pip3
RUN mkdir /code
WORKDIR /code
COPY .  /code
RUN pip3 install -r requirements.txt
RUN npm install

EXPOSE 8000

# CMD ["python", "manage.py", "runserver", "0.0.0.0:8080" ]
CMD [ "npm start" ]