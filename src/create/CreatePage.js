import React from "react";
import Form from "./Form";

export default function CreatePage({ onFormSubmit }) {
  return (
    <div>
      <Form onFormSubmit={onFormSubmit} />
    </div>
  );
}
