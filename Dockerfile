FROM mhart/alpine-node
ARG PORT
RUN echo "ipv6" >> /etc/modules
RUN echo "http://nl.alpinelinux.org/alpine/v3.7/community" >> /etc/apk/repositories

RUN apk add --no-cache python3 yarn && python3 -m ensurepip
RUN mkdir /code
WORKDIR /code
COPY .  /code
RUN pip3 install -r requirements.txt
RUN yarn
RUN yarn build:dev
EXPOSE $PORT
CMD python3 manage.py runserver 0.0.0.0:$PORT