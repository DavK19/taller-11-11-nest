### GUIA DE ESTUDIO PARCIAL 2 


## POSIBLE PARCIAL 
Creación de API para estudiantes del siguientes semestres
* El usuario se registra y obtiene un API KEY 
* El usuario envia el TOKEN como header para acceder a ciertos recursos
* La API tiene endpoints públicos y privados
* La API retorna recursos multimedia 

Crear proyecto 

```
nest new <project_name>
```

Agregar variables de entorno base de datos para docker
* crea archivo .env
* docker puede acceder al archivo .env asi no este configurado en nest las variables de entorno

```
DB_PASSWORD=clave
DB_NAME=nombre
```
# Levantar base de datos local docker
ejecuta docker compose para desplegar la base de datos
* va buscar el archivo docker-compose.yml 
``` 
docker-compose up -d
```

valida en tu gestor de base de datos preferido si te puedes conectar
* db url y conectarse en tableplus, dbbeaver, etc.. 
```
localhost:5432
user: postgres
password: <la misma del .env>
```

remover carpeta de /postgres en el .gitignore para no subir información
innecesaria al repositorio. 

