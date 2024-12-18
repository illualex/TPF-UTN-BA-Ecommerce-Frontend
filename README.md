# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


-------- Descripción --------
- Proyecto: Creación de una pagina E-commerce venta de hardware y cosas geeks.
- Uso y Explicación: La pagina se llama "GamerMania" donde para el armado de la pagina e-commerce use de ejemplo otras paginas similares, también se uso el método Desktop First para la creación. El despliegue de la pagina e-commerce se realizo mediante la pagina Vercel. La estructura de la pagina se realizo de forma modular para que sea mas legible y fácil de modificar mediante el uso de componentes.
    - Se tomo en cuenta todas las consignas:
        - Uso de useState o useEffect o GlobalContext, etc.
        - Hacerlo Responsive para pantallas mobile a 4k.
        - Uso de React Router Dom para navegar entre paginas.
        - Uso de formularios en "Ayuda", "Iniciar sesión" y en el Carrito.
        - Uso de localStorage(Carrito) o sessionStorage(Login)
        - Uso de un fetch para mi JSON propio.
        - Se trato de implementar los métodos de DRY, YAGNI y KISS en todas las paginas posibles.

- Funciones:
    - El apartado de "iniciar sesión" no importa el nombre de usuario y contraseña. Se colocara el usuario que se coloque en el input y este se reflejara en el navbar donde se puede cerrar sesión al apretar en el nombre.

- URL Vercel: https://final-frontend-utn-tm.vercel.app/home

- Dependencias usadas:
    - _ react-router-dom
    - _ react icons
    - _ swiper (Para la creación de un Slider/Carousel)

- Agregados Extra:
    - Creación de un 'vercel.json' para arreglar un error de SPA, ahora al recargar la pagina se mantiene en el mismo lugar de la recarga y no tire un fatal error 404. También al 'vite.config.js' se le agrego "base: '/'," para el manejo de las routes de App.

- Dificultades:
    - _ Creación del React Router en el App (A veces dejaba de andar y necesitaba relevantar el localhost).
    - _ Colocar Varios puntos de interrupción para adaptar progresivamente las vistas en celular(320px a 425px), tablet(426px a 768px), laptop(769px a 1024px), pantalla grande(1025px a 1440px) y pantalla ultra grande(1441px a mas), etc.
    - _ Creación y adaptación responsive del menu a menu-hamburguesa/filtro para las medidas 320px a 425px para hacerlo mas responsive.
    - _ Creación y Manejo de estados mediante el uso de globalcontext y algunos usos de Hooks. (React a veces no me tomaba bien los cambios y necesitaba reiniciar el localhost o probar una forma distinta de crearlo e integrarlo para que funcione correctamente).

- Recomendaciones futuras:
    - _ Seria bueno que en la cursada sea mas larga en Frontend, también estaría bueno explicar 
    teoría/tácticas sobre SEO y rendimiento de la pagina web (Herramienta que se puede usar con la DevTool en LigthHouse), esto podría mejorar viendo Next.Js después de React.Js y ver Tailwind para mejorar el apartado CSS. El Tp Final de Frontend podría ser mejorar una pagina hecha en React.js y CSS y crear o pasarlo a Next.js + Tailwind como entrega final.