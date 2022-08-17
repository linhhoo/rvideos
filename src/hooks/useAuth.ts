import { useEffect, useState, useCallback } from "react";
import { useRecoilState } from "recoil";
import { authState } from "@/states/authState";
import { supabase } from "@/utils/supabaseClient";
import { genEmailByName } from "@/utils/helpers";
import { UserModel } from "@/models/userModel";

export const useAuth = (isCheckUser: boolean = false) => {
  const [user, setUser] = useRecoilState(authState);
  const [authLoaded, setAuthLoaded] = useState(false);
  const [isLoginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState<any>(null);
  const [isSignUpLoading, setSignUpLoading] = useState(false);
  const [signUpError, setSignUpError] = useState<any>(null);

  const onLogin = useCallback(
    async (userName: string, password: string) => {
      setLoginLoading(true);
      setLoginError(null);
      const { user, error } = await supabase.auth.signIn({
        email: genEmailByName(userName),
        password,
      });
      if (user) {
        setUser(user);
      }
      if (error) {
        setLoginError(error);
      }
      setLoginLoading(false);
    },
    [setUser]
  );

  const onSignUp = useCallback(
    async (userName: string, password: string) => {
      setSignUpLoading(true);
      setSignUpError(null);
      const { user, error } = await supabase.auth.signUp({
        email: genEmailByName(userName),
        password,
      });
      if (user) {
        setUser(user);
      }
      if (error) {
        setSignUpError(error);
      }
      setSignUpLoading(false);
    },
    [setUser]
  );

  const onLogout = useCallback(async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      setUser(null);
    }
  }, [setUser]);

  const _onCheckUser = useCallback(async () => {
    const user: UserModel | null = await supabase.auth.user();
    setUser(user || null);
    setAuthLoaded(true);
  }, [setUser]);

  useEffect(() => {
    if (isCheckUser) {
      _onCheckUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCheckUser]);

  return {
    user,
    authLoaded,
    isLoginLoading,
    loginError,
    isSignUpLoading,
    signUpError,
    onLogin,
    onSignUp,
    onLogout,
  };
};
