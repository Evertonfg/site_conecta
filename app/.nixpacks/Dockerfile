FROM ghcr.io/railwayapp/nixpacks:ubuntu-1741046653

ENTRYPOINT ["/bin/bash", "-l", "-c"]
WORKDIR /app/


COPY .nixpacks/nixpkgs-ba913eda2df8eb72147259189d55932012df6301.nix .nixpacks/nixpkgs-ba913eda2df8eb72147259189d55932012df6301.nix
RUN nix-env -if .nixpacks/nixpkgs-ba913eda2df8eb72147259189d55932012df6301.nix && nix-collect-garbage -d
COPY .nixpacks/nixpkgs-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7.nix .nixpacks/nixpkgs-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7.nix
RUN nix-env -if .nixpacks/nixpkgs-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7.nix && nix-collect-garbage -d

COPY .nixpacks/assets /assets/
ARG CI GIT_SHA NIXPACKS_METADATA NIXPACKS_SPA_OUTPUT_DIR NODE_ENV NPM_CONFIG_PRODUCTION
ENV CI=$CI GIT_SHA=$GIT_SHA NIXPACKS_METADATA=$NIXPACKS_METADATA NIXPACKS_SPA_OUTPUT_DIR=$NIXPACKS_SPA_OUTPUT_DIR NODE_ENV=$NODE_ENV NPM_CONFIG_PRODUCTION=$NPM_CONFIG_PRODUCTION

# setup phase
# noop

# caddy phase
COPY . /app/.
RUN  caddy fmt --overwrite /assets/Caddyfile

# install phase
ENV NIXPACKS_PATH=/app/node_modules/.bin:$NIXPACKS_PATH
COPY . /app/.
RUN --mount=type=cache,id=GEFMQvcHCwk-/root/bun,target=/root/.bun npm install

# build phase
COPY . /app/.
RUN --mount=type=cache,id=GEFMQvcHCwk-node_modules/cache,target=/app/node_modules/.cache npm run build



RUN printf '\nPATH=/app/node_modules/.bin:$PATH' >> /root/.profile


# start
COPY . /app

CMD ["npm run dev"]

