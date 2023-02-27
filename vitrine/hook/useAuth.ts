import axios from 'axios';
import {useState, useEffect} from 'react';

const apiUser = "http://ride.francecentral.cloudapp.azure.com:8000/api/.user/user";

type User = {
  id: number;
  email: string;
  roles: [];
}
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    let token = null;
    if (typeof window !== "undefined") {
      token = localStorage.getItem('token');
      if (token) {
        setToken(token);
      }
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
      setIsLoading(false);
    }).catch(err => {
      setIsLoading(false);
      console.log(err);
    });
  }, []);

  return {
    isAuthenticated: isAuthenticated,
    isAdmin: isAdmin,
    user: user,
    isLoading: isLoading,
    token: token
  }
}
export default useAuth;