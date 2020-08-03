# Spring Notes Vue #

## Purpose ##

The purpose of this application is to display proficiency in web-development driven programming languages and 
constructs. Also, knowledge and a working example of API usage.

## See Also ##

For more context, see original project @ https://github.com/casperwilkes/spring_notes 

# Setup #

Setup the project using the following steps:
1. Clone repository to a location with read/write privileges
2. Change into directory 
   - `cd spring_notes_vue`
3. Initialize homestead
   - `php vendor/bin/homestead make`
4. Copy over `Homestead.yaml.example`
   - `cp Homestead.yaml.example Homestead.yaml`
5. Copy over `.env.example`
   - `cp .env.example .env`
6. Run vagrant
   - `vagrant up`
   - Upon provisioning:
     - Your database user and password will be setup 
     - Your CA certificate will be copied to project root
7. SSH into machine
   - `ssh vagrant@springnotes.loc`
8. Run migrations & seeds
   - `artisan migrate --seed`

## HTTPS ##

If you wish to set up HTTPS, the ca.homstead file has been copied to the home directory

1. Open chrome
2. Navigate to
   - Settings
   - Advanced
   - Manage Certificates
   - Authorities
   - Click 'IMPORT'
3. Import ca.homestead file from project directory root
   - Accept all options
4. Restart browser
   - Navigate to `https://springnotes.loc` 
  

