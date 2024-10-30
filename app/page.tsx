import { Metadata } from "next";
import Header from "../src/Header";

export const metadata: Metadata = {
    title: "Home page with static title",
    };
  
  export default async function Page() {
    return (
        <div>
            <Header />
            Home Page
        </div>
    )
}