# ServerInstaller visual checkpoint

ServerInstaller was hardened from a fabricated branded self-hosted deployment wizard with fake prerequisites, repository/image names, Docker Compose, Quick Install, environment templates, generated JWT secrets, database credentials, SSL automation, config generation/downloads, and a localhost deployment claim. It accepted domain/email/database inputs and called an unsupported installer procedure. Those claims and controls were removed.

The page documents artifact/repository provenance, release/checksum/license/dependencies, supported runtime, owner-provided environment and secrets, secret management/rotation, approved target, image provenance, migrations, backups/rollback, TLS/firewall, least privilege, change records, post-deployment checks, monitoring, incident response, maintenance, support, recovery, privacy, and authorization. Files: `server-installer-desktop.webp`, `server-installer-mobile.png`.
