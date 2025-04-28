FROM debian:12-slim AS build

RUN apt-get update && \
    apt-get install --no-install-suggests --no-install-recommends --yes \
    python3-venv=3.11* gcc-12=12.* libpython3-dev=3.11* && \
    python3 -m venv /venv && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

FROM build AS build-venv

COPY requirements.txt /requirements.txt
RUN /venv/bin/pip install --disable-pip-version-check -r /requirements.txt

FROM gcr.io/distroless/python3-debian12:latest-amd64
COPY --from=build-venv /venv /venv

WORKDIR /app
COPY . .

EXPOSE 8080

CMD ["/venv/bin/python", "manage.py", "runserver", "0.0.0.0:8080"]
