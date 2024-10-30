import Head from "next/head"
import { getData } from "../../../src/actions"
import Header from "../../../src/Header"

export async function generateMetadata({ params }) {
    const data = await getData(params.id)
    return { title: data.title }
}
export default async function Page({ params }) {
    const data = await getData(params.id)

    return <div>
        {/* <Head>
            <title>{data.title}</title>
        </Head> */}
        <Header />
        This is the page to have dynamic title. it is having the title dynamicly populated but results in multiple fetch requests.
        <br/>
        Title: {data.title}
    </div>

}