import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserDetails() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);  // must show "Loading..." first
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Reset state on route change to ensure "Loading..." appears
    setLoading(true);
    setUser(null);

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((r) => r.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => {
        setUser(null);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    // EXACT text required by tests
    return <div>Loading...</div>;
  }

  if (!user) {
    return <p>Could not load user.</p>;
  }

  // EXACT text/format in <p> tags as per the test cases
  return (
    <div>
      <p>{`Name: ${user.name}`}</p>
      <p>{`Username: ${user.username}`}</p>
      <p>{`Email: ${user.email}`}</p>
      <p>{`Phone: ${user.phone}`}</p>
      <p>{`Website: ${user.website}`}</p>
    </div>
  );
}
