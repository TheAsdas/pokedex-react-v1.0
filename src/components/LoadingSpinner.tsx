import React from "react";

export const LoadingSpinner: React.FC = () => {
  return (
    <div
      id="loadingSpinner"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <div className="spinner-border" role="status" />
      <strong className="sr-only">Cargando...</strong>
    </div>
  );
};
