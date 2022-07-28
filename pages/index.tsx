import type { NextPage } from "next";
import Head from "next/head";
import Masthead from "../components/masthead";
import AboutUs from "../components/aboutus";
import Skills from "../components/skills";
import Works from "../components/works";
import TrustedBy from "../components/trustedby";
import ContactUs from "../components/contactus";
import Footer from "../components/footer";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Watch</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Masthead />
      <AboutUs />
      <Skills />
      <Works /> 
      <TrustedBy />
      <ContactUs />
      <Footer />
    </div>
  )
}
export default Home;
