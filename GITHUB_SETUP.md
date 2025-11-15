# Subir el Proyecto a GitHub

El repositorio git ya está inicializado y el commit inicial está hecho. Sigue estos pasos para subirlo a GitHub:

## Opción 1: Usando GitHub Web (Recomendado)

### 1. Crear el Repositorio en GitHub

1. Ve a [GitHub.com](https://github.com) e inicia sesión
2. Haz clic en el botón **"+"** en la esquina superior derecha → **"New repository"**
3. Completa los datos:
   - **Repository name**: `spa-azucena-casanova` (o el nombre que prefieras)
   - **Description**: "Sitio web del SPA Azucena Casanova López - React + TypeScript + Node.js + PostgreSQL"
   - **Visibilidad**: Elige **Private** (recomendado) o **Public**
   - **NO marques** "Initialize this repository with a README" (ya tenemos uno)
   - **NO agregues** .gitignore ni licencia (ya están incluidos)
4. Haz clic en **"Create repository"**

### 2. Conectar el Repositorio Local con GitHub

Después de crear el repositorio, GitHub te mostrará instrucciones. Ejecuta estos comandos en tu terminal:

```bash
cd C:\Users\ale13\OneDrive\Escritorio\spa-azucena-casanova

# Reemplaza TU_USUARIO con tu nombre de usuario de GitHub
git remote add origin https://github.com/TU_USUARIO/spa-azucena-casanova.git

# Cambiar el nombre de la rama a main (si GitHub usa main en lugar de master)
git branch -M main

# Subir el código
git push -u origin main
```

Si GitHub creó el repositorio con la rama `master` en lugar de `main`, usa:

```bash
git push -u origin master
```

### 3. Autenticación

Si te pide credenciales:
- **Usuario**: Tu nombre de usuario de GitHub
- **Contraseña**: Usa un **Personal Access Token** (no tu contraseña de GitHub)
  - Para crear un token: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token
  - Marca los permisos: `repo` (todos los permisos de repositorio)

## Opción 2: Usando GitHub CLI (si lo tienes instalado)

```bash
# Verificar si tienes GitHub CLI instalado
gh --version

# Si está instalado, crear el repositorio directamente
cd C:\Users\ale13\OneDrive\Escritorio\spa-azucena-casanova
gh repo create spa-azucena-casanova --private --source=. --remote=origin --push
```

## Verificar que se Subió Correctamente

Después de hacer push, ve a tu repositorio en GitHub y verifica que todos los archivos estén ahí.

## Comandos Útiles para el Futuro

```bash
# Ver el estado del repositorio
git status

# Agregar cambios
git add .

# Hacer commit
git commit -m "Descripción de los cambios"

# Subir cambios a GitHub
git push

# Ver el historial de commits
git log --oneline
```

## Nota Importante

El archivo `.env` con tus credenciales de PostgreSQL **NO** se subirá a GitHub porque está en el `.gitignore`. Esto es correcto por seguridad.

Solo el archivo `.env.example` se subirá, que es el que otros desarrolladores pueden usar como plantilla.

