# WELCOME TO OS NETWORK TOOLS:

## This is a Command Line Program



## Options:
[1] : Get Operating System Informations<br>
\
[2] : Get Network Informations

## Flags:
output-json : Output result into a JSON File<br>
output-xml : Output result into a XML File

## Important:
Flags are optional, default output into  stdout<br>

Flags must be specified as second arguments after specifying options

## Examples

### node ./index.js --help (-h)
Output  help menu 
### node ./index.js 1
Output Operating System Informations into your running terminal
### node ./index.js 1 output-json
Ouput Operating System Informations into a JSON file
### node ./index.js 1 output-xml
Ouput Operating System Informations into a XML file
### node ./index.js 2
Output Network Informations into your running terminal
### node ./index.js 2 output-json
Ouput Network Informations into a JSON file
### node ./index.js 2 output-xml
Ouput Network Informations into a XML file

