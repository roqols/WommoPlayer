# WommoPlayer

[PT-BR] 

OLÁ, ESSE É O MANUAL DE USO.

Os requisitos para utilizar a Wommo são: 

[1] Ter o Python instalado (Sem ele você não vai conseguir instalar as bibliotecas)
[2] Ter a biblioteca pytube (Disponivel no instalador de biblioteca (installlibrary))
[3] Ter a biblioteca moviepy.editor (Disponivel no instalador de biblioteca (installlibrary))

Como usar?

[1] A WommoDownloader.bat serve para você conseguir instalar as musicas diretas do youtube, elas ficaram armazenadas na pasta "Musics"
[2] Abrindo A WommoPage.bat você consegue ter acesso ao player

Como apagar uma musica? 

Para conseguir apagar uma música você deverá seguir os seguintes passos:

[1] Deletar o arquivo .mp3 da pasta "Musics"
[2] Modifique o arquivo javascript, na primeira linha é apresentado a você a variavel "Sounds", você deverá apagar o
objeto da musica que você deseja deletar, exemplo:

 {titulo:'Paradise', src:'Musics/Coldplay - Paradise (Official Video).mp3'},


Obs: Não baixar musica que tenha o caractere '''''''''''''
Obs²: Sempre que baixar uma nova musica lembre-se de reiniciar a pagina
Obs³: Se o player não estiver funcionando, verifique o script.js e apague o que precisar da variavel

-----------------------------------------------

[EN]

HELLO, THIS IS THE USER MANUAL.

The requirements for using Wommo are:

[1] Having Python installed (Without it you won't be able to install the libraries)
[2] Having the pytube library (Available in the library installer (installlibrary))
[3] Having the moviepy.editor library (Available in the library installer (installlibrary))

How to use?

[1] The WommoDownloader.bat is used to install music directly from YouTube, which will be stored in the "Musics" folder.
[2] By opening the WommoPage.bat, you can access the player.

How to delete a song?

To delete a song, you should follow these steps:

[1] Delete the .mp3 file from the "Musics" folder.
[2] Modify the javascript file. In the first line, you will see the variable "Sounds". You must delete the object of the song you wish to delete. Example:

{titulo:'Paradise', src:'Musics/Coldplay - Paradise (Official Video).mp3'},

Note: Do not download songs with the character '''''''''''''
Note²: Always remember to restart the page when you download a new song
Note³: If the player is not working, check the script.js file and delete what is necessary from the variable
