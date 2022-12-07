import { useLogout } from '../../hooks/useLogout';

import './Home.css';

export function Home() {
  const { logout } = useLogout();

  return (
    <div>
      <h1 className="home">Home</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
