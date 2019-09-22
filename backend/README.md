# Exemplio Backend

This is the code for [exemplio](https://exempl.io)'s backend (not yet implemented).

## Routes

1.  /exemplos/fullList --- access a list of all exemplos and all their details
2.  /exemplos/basicList --- access a basic info list of all exemplos
3.  /exemplos/:exemploID --- access all information about a specific exemplo

## What to do after clonning:

* First of all, of course, install all dependencies with npm install (or yarn install, if you'd rather)
* This project uses MySQL to store and consult data about exemplos, so you need to install it in order to execute the project.
* Also, create a .env file, containing info to connect to DB (.env_example is a template for it)