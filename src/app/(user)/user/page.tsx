import { getSession } from '@/lib/session-token-auth';
import React from 'react'

const Dashboard = async() => {
  const user = await getSession();
  console.log(user)
  if (!user) return <p>Not logged in</p>;

  return <div>Welcome, {user.name}!</div>;
}

export default Dashboard