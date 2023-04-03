import os
import re
from pytube import YouTube
from moviepy.editor import *

# Define o link do vídeo do YouTube a ser baixado
link = input("put the link here: ")

# Cria um objeto do tipo YouTube
yt = YouTube(link)

# Extrai o arquivo de áudio da maior qualidade disponível
ys = yt.streams.get_audio_only()

# Define o nome do arquivo de saída
output_file = yt.title + ".mp4"

# Define o caminho completo para salvar o arquivo de saída
output_path = "Musics"

# Baixa o arquivo de áudio no formato mp4
ys.download(output_path=output_path, filename=output_file)

# Converte o arquivo mp4 para mp3
clip = AudioFileClip(os.path.join(output_path, output_file))
clip.write_audiofile(os.path.join(output_path, yt.title + ".mp3"))

# Remove o arquivo mp4 após a conversão
os.remove(os.path.join(output_path, output_file))

# Lê o arquivo script.js
with open("script.js", "r") as f:
    script_contents = f.read()

# Encontra a posição onde a variável sounds é definida
sounds_pos = script_contents.find("var sounds")

# Encontra o fim da definição da variável sounds
sounds_end_pos = script_contents.find("]", sounds_pos)

# Conta quantas músicas existem atualmente
num_musicas = script_contents.count('{titulo:')

# Atualiza o índice da música atual
indexmusic = num_musicas - 1

# Cria a string a ser inserida no arquivo script.js
new_sound = '{{titulo:\'{0}\', src:\'{1}\'}},\n'.format(yt.title, os.path.join(output_path, yt.title + ".mp3").replace("\\", "/"))

# Insere a nova string no local correto do arquivo script.js
new_script_contents = script_contents[:sounds_end_pos] + new_sound + script_contents[sounds_end_pos:]

# Atualiza o valor do total de músicas
new_script_contents = re.sub(r'total_musicas = \d+', f'total_musicas = {num_musicas}', new_script_contents)

# Escreve o arquivo script.js com a nova definição da variável sounds e total_musicas
with open("script.js", "w") as f:
    f.write(new_script_contents)
