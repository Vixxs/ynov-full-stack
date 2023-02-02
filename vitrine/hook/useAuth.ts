import axios from 'axios';
import {useState, useEffect} from 'react';

const apiUser = "http://localhost:8000/api/.user/user";

type User = {
  id: number;
  email: string;
  "roles": [];
}
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState(true);
  let token = null;

  useEffect(() => {
    if (typeof window !== "undefined") {
      token = localStorage.getItem('token');
    }
    axios.get(apiUser, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      let user = res.data;
      setUser(user);
      setIsAuthenticated(true);
      setIsAdmin(user?.roles?.includes('ROLE_ADMIN'));
      setLoading(false);
    }).catch(err => {
      setLoading(false);
      console.log(err);
    });
  }, []);

  return {
    isAuthenticated: isAuthenticated,
    isAdmin: isAdmin,
    user: user,
    loading: loading
  }
}
export default useAuth;