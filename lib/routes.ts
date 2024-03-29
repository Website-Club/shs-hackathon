type Route = {
  name: string;
  path: string;
  signedIn: boolean;
  admin: boolean;
  signedOut: boolean;
};

const routes: Route[] = [
  {
    name: "Home",
    path: "/",
    signedIn: true,
    admin: false,
    signedOut: true
  },
  {
    name: "About",
    path: "/about",
    signedIn: true,
    admin: false,
    signedOut: true
  },
  {
    name: "Resources",
    path: "/resources",
    signedIn: true,
    admin: false,
    signedOut: true
  }
  //{
  //  name: "Hackathon Resources",
  //  path: "/hackathon-resources",
  //  signedIn: true,
  //  admin: true,
  //  signedOut: true,
  //},
];

export default routes;
