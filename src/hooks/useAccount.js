import { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosConfig";

export const useAccount = () => {
  const [accountDetails, setAccountDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAccountDetails = async () => {
      try {
        const token = localStorage.getItem("token"); // Obtener el token del almacenamiento local
        if (!token) {
          throw new Error("No se encontró el token de autenticación.");
        }
        const response = await axiosInstance.get(
          "/api/users/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`, // Agregar el token en el encabezado de la solicitud
            },
          }
        );

        setAccountDetails(response.data.payload.user);
      } catch (err) {
        setError(
          err.response?.data?.payload?.message ||
            "Error al cargar los detalles de la cuenta."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchAccountDetails();
  }, []);

  return { accountDetails, loading, error };
};
