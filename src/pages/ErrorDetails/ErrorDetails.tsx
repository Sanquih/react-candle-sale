"use client";
import React from "react";
import styles from "./ErrorDetails.module.css";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export type ErrorDetailsProps = {
  // types...
};

const ErrorDetails: React.FC<ErrorDetailsProps> = ({}) => {
  const error = useRouteError();
  return (
    <div className={styles.errordetails}>
      {isRouteErrorResponse(error)
        ? "The page does not exist"
        : `An error has occurred ${(error as Error).message}`}
    </div>
  );
};

export default ErrorDetails;
