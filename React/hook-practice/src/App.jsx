import React, { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect는 cleanup을 리턴하기 때문에 async를 직접 못만듬
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const userData = await response.json();
        setUsers(userData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []); // 빈 배열일때 컴포넌트가 처음 랜더링 될 때 딱 한번만 실행한다.

  if (loading) return <div>로딩 중..</div>;
  if (error) return <div>에러: {error}</div>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
}

export default UserList;
