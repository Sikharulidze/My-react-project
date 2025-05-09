import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";

const Info = lazy(() => import("../components/Info"));

function About() {
  return (
    <>
      <div>About Page</div>
      <Link to={"/contact"}>Contact</Link>
      <Suspense>
        <Info />
      </Suspense>
    </>
  );
}

export default About;
