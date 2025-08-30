# Atelopus

Este es un proyecto basado en React y TailwindCSS, configurado con Vite para un desarrollo rápido y eficiente.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalados los siguientes programas en tu sistema:

- [Node.js](https://nodejs.org/) (versión 16 o superior recomendada)
- [Git](https://git-scm.com/)

## Pasos para iniciar el proyecto

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local:

### 1. Clonar el repositorio

Clona este repositorio en tu máquina local utilizando Git:

- git clone git@github.com:davidrivadeneyra/atelopus.git


### 2. Navegar al directorio del proyecto
Accede al directorio del proyecto clonado:
- cd atelopus

### 3. Instalar dependencias
Instala las dependencias necesarias utilizando npm:
- npm install

### 4. Ejecutar el servidor de desarrollo
Inicia el servidor de desarrollo con el siguiente comando:
- npm run dev

Esto iniciará el servidor de desarrollo y podrás acceder al proyecto en tu navegador en la dirección http://localhost:5173 (por defecto).


### Estructura del proyecto
La estructura principal del proyecto es la siguiente:

atelopus/
├── public/         # Archivos estáticos
├── src/            # Código fuente
│   ├── components/ # Componentes reutilizables
│   ├── [App.jsx]   # Componente principal
│   ├── main.jsx    # Punto de entrada
├── index.html      # Archivo HTML principal
├── package.json    # Dependencias y scripts
├── tailwind.config.js # Configuración de TailwindCSS
└── vite.config.js  # Configuración de Vite

## Herramientas y tecnologías utilizadas
- React: Biblioteca para construir interfaces de usuario.
- TailwindCSS: Framework de CSS para diseño rápido y responsivo.
- Vite: Herramienta de construcción rápida para proyectos modernos.
- ESLint: Linter para mantener un código limpio y consistente.
