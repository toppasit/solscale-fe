export type MockUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: "influencer" | "entrepreneur";
  phone: string;
};

export const MOCK_USERS: MockUser[] = [
  {
    id: "1",
    name: "influ1",
    email: "toppst128@gmail.com",
    password: "Password123",
    role: "influencer",
    phone: "0625486951",
  },{
    id: "2",
    name: "entre1",
    email: "toppst128@gmail.com",
    password: "Password123",
    role: "entrepreneur",
    phone: "0625486951",
  },
];

export function findUserByCredentials(
  email: string,
  password: string
): MockUser | null {
  return (
    MOCK_USERS.find((u) => u.email === email && u.password === password) ?? null
  );
}
