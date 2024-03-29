FROM mhart/alpine-node

RUN echo "ipv6" >> /etc/modules
RUN echo "http://nl.alpinelinux.org/alpine/v3.7/community" >> /etc/apk/repositories

RUN apk add --no-cache python3 yarn && python3 -m ensurepip
RUN mkdir /code
WORKDIR /code
COPY .  /code
RUN pip3 install -r requirements.txt
RUN npm install
RUN npm run build:dev

EXPOSE 8080
CMD ["python3", "manage.py", "runserver", "0.0.0.0:8080" ]