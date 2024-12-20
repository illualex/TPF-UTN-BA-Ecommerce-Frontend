import React from "react";
import { useAccount } from "../hooks/useAccount";
import "../styles/AccountPage.css";

const AccountPage = () => {
  const { accountDetails, loading, error } = useAccount();

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!accountDetails) {
    return <div>No se encontraron detalles de la cuenta.</div>;
  }

  return (
    <div className="account-page">
      <h1>Mi Cuenta</h1>
      <div className="account-details">
        <p>
          <strong>Nombre:</strong> {accountDetails.name}
        </p>
        <p>
          <strong>Apellido:</strong> {accountDetails.lastName}
        </p>
        <p>
          <strong>DNI:</strong> {accountDetails.dni}
        </p>
        <p>
          <strong>Teléfono:</strong> {accountDetails.phone}
        </p>
        <p>
          <strong>Correo electrónico:</strong> {accountDetails.email}
        </p>
        <p>
          <strong>Verificación de correo:</strong>{" "}
          {accountDetails.emailVerified ? "Verificado" : "No verificado"}
        </p>
      </div>
    </div>
  );
};

export default AccountPage;
