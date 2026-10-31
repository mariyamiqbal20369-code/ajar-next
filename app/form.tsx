
"use client";
import { useState } from "react";

export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      alert(name + " " + email);
    }}>
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <br /><br />
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <br /><br />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <br /><br />
      <button type="submit">Register</button>
    </form>
  );
}