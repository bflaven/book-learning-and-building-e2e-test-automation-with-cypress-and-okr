# make start
# Description: Start the containers
start:
	docker-compose up -d --build

# make stop
# Description: Only stop the containers
stop:
	docker-compose stop


# make down
# Description: Stop the containers and remove them
down:
	docker-compose down

# make ps
# Description: give a list of the containers
ps:
	docker-compose ps


# make info
# Description: list the info for cypress
# info:
# 	docker run -it -v $(PWD):/e2e -w /e2e -e CYPRESS_VIDEO cypress/included:9.7.0 info

# make test
# Description: list the info for cypress
test:
	docker run -it -v $(PWD):/integration -w /integration  cypress/included:9.7.0 run --headless --browser chrome --config video=false,screenshotOnRunFailure=false

# make local
# Description: list the info for cypress
local:
	docker run -it -v $(PWD):/integration -w /integration cypress/included:9.7.0 run --headless --browser chrome --config baseUrl=http://cypress.mydomain.priv/wordpress/,video=false,screenshotOnRunFailure=false

# make spanish
# Description: list the info for cypress
spanish:
	docker run -it -v $(PWD):/integration -w /integration  cypress/included:9.7.0 run --headless --browser chrome --env LANG="es_ES" --config-file "es_ES.conf.env.json" --config video=false,screenshotOnRunFailure=false --spec "cypress/integration/e2e-wp/013_wp_admin_create_content.spec.js"


# make english
# Description: list the info for cypress
english:
	docker run -it -v $(PWD):/integration -w /integration  cypress/included:9.7.0 run --headless --browser chrome --env LANG="en_EN" --config-file "en_EN.conf.env.json" --config video=false,screenshotOnRunFailure=false --spec "cypress/integration/e2e-wp/013_wp_admin_create_content.spec.js"


# make french
# Description: list the info for cypress
french:
	docker run -it -v $(PWD):/integration -w /integration  cypress/included:9.7.0 run --headless --browser chrome --env LANG="fr_FR" --config-file "fr_FR.conf.env.json" --config video=false,screenshotOnRunFailure=false --spec "cypress/integration/e2e-wp/013_wp_admin_create_content.spec.js"

# make bash
# Description: launch a console into cypress
bash:
	docker-compose run --rm --entrypoint bash cypress

# make clean
# Description: clean up the directory by removing the cypress files
clean: stop
	@echo "💥 Removing cypress..."
	@rm -rf node_modules
	@echo "💥 Removing Docker containers..."
	docker-compose rm -f


# FRENCH
 
# docker run -it -v $(PWD):/e2e -w /e2e  cypress/included:9.7.0 run --headless --browser chrome --env LANG="fr_FR" --config-file "fr_FR.conf.env.json" --config video=false,screenshotOnRunFailure=false --spec "cypress/integration/e2e-wp/011_wp_admin_login_with_custom_config_file.spec.js"

# docker run -it -v $(PWD):/e2e -w /e2e  cypress/included:9.7.0 run --headless --browser chrome --env LANG="fr_FR" --config-file "fr_FR.conf.env.json" --config video=false,screenshotOnRunFailure=false --spec "cypress/integration/e2e-wp/012_wp_admin_allvaluesvariables.spec.js"

# ENGLISH

# docker run -it -v $(PWD):/e2e -w /e2e  cypress/included:9.7.0 run --headless --browser chrome --env LANG="en_EN" --config-file "en_EN.conf.env.json" --config video=false,screenshotOnRunFailure=false --spec "cypress/integration/e2e-wp/011_wp_admin_login_with_custom_config_file.spec.js"

# docker run -it -v $(PWD):/e2e -w /e2e  cypress/included:9.7.0 run --headless --browser chrome --env LANG="en_EN" --config-file "en_EN.conf.env.json" --config video=false,screenshotOnRunFailure=false --spec "cypress/integration/e2e-wp/012_wp_admin_allvaluesvariables.spec.js"
 

# SPANISH

# docker run -it -v $(PWD):/e2e -w /e2e  cypress/included:9.7.0 run --headless --browser chrome --env LANG="es_ES" --config-file "es_ES.conf.env.json" --config video=false,screenshotOnRunFailure=false --spec "cypress/integration/e2e-wp/011_wp_admin_login_with_custom_config_file.spec.js"
	

# docker run -it -v $(PWD):/e2e -w /e2e  cypress/included:9.7.0 run --headless --browser chrome --env LANG="es_ES" --config-file "es_ES.conf.env.json" --config video=false,screenshotOnRunFailure=false --spec "cypress/integration/e2e-wp/012_wp_admin_allvaluesvariables.spec.js"

