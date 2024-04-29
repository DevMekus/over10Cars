import { useEffect, useState } from "react";

const useAuth = () => {
  //   const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      /**Check Sessions Here */
      const isLoggedIn = await fetch("http://localhost/over10API/Account.php")
        .then((response) => response.json())
        .then((data) => data.isLoggedIn)
        .catch((error) => {
          console.error("Authentication error:", error);
          return false;
        });

      setIsLoggedIn(isLoggedIn);
      setIsLoading(false);
    };
    checkAuth();
  }, []);

  return { isLoading, isLoggedIn };
};

export default useAuth;
