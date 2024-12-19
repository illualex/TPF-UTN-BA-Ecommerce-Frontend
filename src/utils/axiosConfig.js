import axios from 'axios';

// Configurar la baseURL usando la variable de entorno
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,  // Usar la URL de la variable de entorno
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
