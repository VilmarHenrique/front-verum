import { httpClient } from "../api/http-client";

type Params = {
  email: string;
  password: string;
};

export const login = async ({ email, password }: Params) => {
  const response = await httpClient.post<{ token: string }>("/login", {
    email,
    password,
  }, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`
    },
  });

  return {
    token: response.data.token,
  };
};
