import Image from "next/image";
import Link from "next/link";
import HomepageClicker from "./Components/HomePageClicker";

export default function Home() {
  return (
    <main><h1>Serissa The Code Cat</h1>
    <Link href="/About">About Me</Link><br/>
    <Link href="/History">Work History</Link><br/>
    <Link href="/Accademia">Education</Link><br/>
    <Link href="/Projects">Projects</Link><br/>
    <Link href="/Hobbies">Hobbies</Link><br/>
    <Link href="/Contact">Contact Me</Link><br/>
    <br/>
    <br/>
    <HomepageClicker/>
    <br/>
    <br/>
    </main>
  )
}