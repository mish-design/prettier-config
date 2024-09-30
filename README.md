Mish Dev Prettier Config
------------

Общий конфигурационный файл для prettier который используется во всех проектах Mish Lab

Пример фоматирования можно псмотреть в папке example там два файла, один без форматтирования, второй с примененным форматированием

Использование
------------

Для подключения установите prettier и @mish.dev/prettier при помощи yarn/npm

```shell
yarn add -D prettier @mish.dev/prettier
```

Далее в package.json нужно указать config для prettier

```json lines
{
  "prettier" : "@mish.dev/prettier"
}
```

А так же добавьте скрипт для запуска prettier в package.json

```json lines
{
  "prettier" : "prettier -w ."
}
```

Вместо всех файлов можете указать специфический путь, например 

```json lines
{
  "prettier" : "prettier -w ./src"
}
```

Так же рекомендую обновить .prettierignore

```ignorelang
.idea
dist
**/.git
**/.svn
**/.hg
**/node_modules
.github
build
.eslintrc.json
.dockerignore
*.yaml
*.env
```

И проверить его работу!
